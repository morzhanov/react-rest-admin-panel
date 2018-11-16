import React from 'react'
import './EntityPage.styl'
import Grid from '../../../../shared/Grid/Grid'
import Table from '../../../../shared/Table/Table'
import { Card, CardBody, CardHeader, CardFooter } from '../../../../shared/Card/Card'

const EntityPage = ({ title, subtitle, cols, data }) => (
  <Grid>
    <Grid xs={12} sm={12} md={12}>
      <Card>
        <CardHeader>
          <h4 className="title">{title}</h4>
          <p className="subtitle">{subtitle}</p>
        </CardHeader>
        <CardBody>
          <Table cols={cols} data={data} />
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </Grid>
  </Grid>
)

export default EntityPage
