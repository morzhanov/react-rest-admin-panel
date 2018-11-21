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

@observer
class EntityItemPage extends React.Component {
  constructor(props) {
    super(props)
    const {
      entity,
      history: {
        location: { pathname }
      }
    } = props

    const id = parseId(pathname)
    const Model = createEntityModel(entity)
    const model = Model.create({ id: id || 0 })

    if (id >= 0) model.fetch(id)

    this.state = { model, pageType: id >= 0 ? PageType.UPDATE : PageType.CREATE }
  }

  submitAddNew = async form => {
    const { model } = this.state
    const { history } = this.props
    const res = await model.create(form.values())
    if (res) {
      const path = history.location.pathname
      history.push(path.substring(0, path.lastIndexOf('/')))
    }
  }

  submitUpdate = async form => {
    const { model } = this.state
    const { history, entity } = this.props
    const res = await model.update(form.values(), model.id, entity.updateUrlMethod)
    if (res) {
      const path = history.location.pathname
      history.push(path.substring(0, path.lastIndexOf('/')))
    }
  }

  handleFormError = form => {
    logger.error(form.errors())
  }

  render() {
    const { fields, entity } = this.props
    const { model, pageType } = this.state

    const onSubmit = pageType === PageType.CREATE ? this.submitAddNew : this.submitUpdate
    const form = createForm({
      fields,
      data: model,
      onSuccess: onSubmit,
      onError: this.handleFormError
    })

    return (
      <div className="entity-item">
        <Grid>
          <Card>
            <Card className="card__header">
              {`${capitalize(pageType)} ${capitalize(entity.name)}`}
            </Card>
            <Card className="card__body">
              <Form form={form} onSubmit={onSubmit} />
            </Card>
            <Card className="card__footer">
              <Footer type={pageType} onSubmit={form.onSubmit} />
            </Card>
          </Card>
        </Grid>
      </div>
    )
  }
}

export default withRouter(EntityItemPage)
