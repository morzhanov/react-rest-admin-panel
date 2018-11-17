import React from 'react'
import { observer } from 'mobx-react'
import './EntityPage.styl'
import Grid from '../../../../shared/Grid/Grid'
import Table from '../../../../shared/Table/Table'
import { Card, CardBody, CardHeader, CardFooter } from '../../../../shared/Card/Card'
import Pagination from '../../../../shared/Pagination/Pagination'

const EntityPage = ({
  title,
  subtitle,
  data,
  list: { cols, pagination, sort, search, filters }
}) => (
  <Grid>
    <Card>
      <CardHeader>
        <h4 className="title">{title}</h4>
        <p className="subtitle">{subtitle}</p>
      </CardHeader>
      <CardBody>
        <Table cols={cols} data={data} />
      </CardBody>
      <CardFooter>
        <Pagination
          pagination={pagination}
          onChangePageNumber={() => {
            // this.getFindProjectList(true) && DOM.scrollTop(200, 500)
          }}
        />
      </CardFooter>
    </Card>
  </Grid>
)

export default observer(EntityPage)
