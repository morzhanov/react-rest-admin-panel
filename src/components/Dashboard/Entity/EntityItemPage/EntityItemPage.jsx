import React from 'react'
import './EntityItemPage.styl'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import Grid from '../../../shared/Grid/Grid'
import Card from '../../../shared/Card/Card'
import Form from './parts/Form'
import Footer from './parts/Footer'
import createForm from './parts/createForm'
import { createEntityModel } from '../../../../stores/createStore'

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

    const id = +pathname.substring(pathname.lastIndexOf('/') + 1)
    const Model = createEntityModel(entity)
    const model = Model.create({ id })
    model.fetch(id)

    this.state = { model }
  }

  render() {
    const { fields } = this.props
    const { model } = this.state
    const form = createForm({ fields, data: model })

    return (
      <div className="update-entity">
        <Grid>
          <Card>
            <Card className="card__header">Update Entity</Card>
            <Card className="card__body">
              <Form form={form} />
            </Card>
            <Card className="card__footer">
              <Footer />
            </Card>
          </Card>
        </Grid>
      </div>
    )
  }
}

export default withRouter(EntityItemPage)
