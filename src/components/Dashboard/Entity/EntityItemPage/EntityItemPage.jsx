import React from 'react'
import './EntityItemPage.styl'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import Grid from '../../../shared/Grid/Grid'
import Card from '../../../shared/Card/Card'
import Form from './parts/Form'
import Footer from './parts/Footer'
import createForm from './parts/createForm'
import { parseId, capitalize } from '../../../../utils/helpers'
import logger from '../../../../utils/logger'
import { createEntityModel } from '../../../../stores/createStore'

export const PageType = Object.freeze({ CREATE: 'CREATE', UPDATE: 'UPDATE' })
export const FooterClickType = Object.freeze({
  CONTINUE: 0,
  SAVE_AND_ADD_ANOTHER: 1,
  SAVE: 2
})

@observer
class EntityItemPage extends React.Component {
  onSubmit = null

  constructor(props) {
    super(props)
    const {
      entity,
      fields,
      history: {
        location: { pathname }
      }
    } = props

    const id = parseId(pathname)
    const Model = createEntityModel(entity)
    this.model = Model.create({ id: id || 0 })

    if (id >= 0) {
      this.model.fetch(id).then(res => this.form.update(res))
    }

    const pageType = id >= 0 ? PageType.UPDATE : PageType.CREATE

    this.state = { pageType }

    this.onSubmit = pageType === PageType.CREATE ? this.submitAddNew : this.submitUpdate

    this.form = createForm({
      fields,
      data: this.model,
      onSuccess: this.onSubmit,
      onError: this.handleFormError
    })
  }

  onFooterButtonClick = (event, type) => {
    this.setState({ footerButtonClickType: type })
    this.form.onSubmit(event)
  }

  submitAddNew = async form => {
    this.postSubmitAction(await this.model.create(form.values()))
  }

  submitUpdate = async form => {
    const { entity } = this.props
    this.postSubmitAction(
      await this.model.update(form.values(), this.model.id, entity.updateUrlMethod)
    )
  }

  postSubmitAction = res => {
    if (!res) return

    const { history } = this.props
    const { footerButtonClickType } = this.state
    const path = history.location.pathname

    switch (footerButtonClickType) {
      case FooterClickType.SAVE:
        history.push(path.substring(0, path.lastIndexOf('/')))
        break
      case FooterClickType.SAVE_AND_ADD_ANOTHER:
        history.push(`${path.substring(0, path.lastIndexOf('/'))}/add`)
        break
      default:
        break
    }
  }

  handleFormError = async form => {
    logger.error('in handle', form.errors())
  }

  render() {
    const { entity } = this.props
    const { pageType } = this.state

    return (
      <div className="entity-item">
        <Grid>
          <Card>
            <Card className="card__header">
              {`${capitalize(pageType)} ${capitalize(entity.name)}`}
            </Card>
            <Card className="card__body">
              <Form form={this.form} onSubmit={this.onSubmit} />
            </Card>
            <Card className="card__footer">
              <Footer type={pageType} onClick={this.onFooterButtonClick} />
            </Card>
          </Card>
        </Grid>
      </div>
    )
  }
}

export default withRouter(EntityItemPage)
