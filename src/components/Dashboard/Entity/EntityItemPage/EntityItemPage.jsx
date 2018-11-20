import React from 'react'
import './EntityItemPage.styl'
import { lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import Grid from '../../../shared/Grid/Grid'
import Card from '../../../shared/Card/Card'
import Form from './parts/Form'
import Footer from './parts/Footer'
import createForm from './parts/createForm'

const EntityItemPage = ({ fields, store }) => {
  const { single } = store

  if (!single) return null

  const form = createForm({ fields, data: store.single })

  return (
    <div className="update-entity">
      <Grid>
        <Card>
          <Card className="card__header">Update Entity</Card>
          <Card className="card__body">
            {/* <Form model={model} data={find(store.data, {id})} /> */}
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

const withDidMount = lifecycle({
  componentDidMount() {
    const {
      store,
      history: {
        location: { pathname }
      }
    } = this.props
    const id = +pathname.substring(pathname.lastIndexOf('/') + 1)
    store.fetchSingle(id)
  }
})

export default withRouter(withDidMount(observer(EntityItemPage)))
