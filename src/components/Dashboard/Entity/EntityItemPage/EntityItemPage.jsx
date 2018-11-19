import React from 'react'
import './EntityItemPage.styl'
import { observer } from 'mobx-react'
import Grid from '../../../shared/Grid/Grid'
import Card from '../../../shared/Card/Card'
import Form from './parts/Form'
import Footer from './parts/Footer'

const EntityItemPage = ({ model, store }) => (
  <div className="update-entity">
    <Grid>
      <Card>
        <Card className="card__header">Update Entity</Card>
        <Card className="card__body">
          {/* <Form model={model} data={find(store.data, {id})} /> */}
          {/* <Form model={model} /> */}
        </Card>
        <Card className="card__footer">
          <Footer />
        </Card>
      </Card>
    </Grid>
  </div>
)

export default observer(EntityItemPage)
