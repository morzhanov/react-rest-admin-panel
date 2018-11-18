import React from 'react'
import './EntityPage.styl'
import { observer } from 'mobx-react'
import Grid from '../../../../shared/Grid/Grid'
import Table from '../../../../shared/Table/Table'
import { Card, CardBody, CardHeader, CardFooter } from '../../../../shared/Card/Card'
import Pagination from '../../../../shared/Pagination/Pagination'
import Search from '../../../../shared/Search/Search'
import Filter from '../../../../shared/Filter/Filter'

const EntityPage = ({
  title,
  subtitle,
  store: {
    data,
    table: { cols, pagination, search, filters, setFilter, setSearch }
  }
}) => (
  <div className="entity-page">
    <Grid>
      <Card>
        <CardHeader>
          <h4 className="title">{title}</h4>
          <p className="subtitle">{subtitle}</p>
          {!!data.length && <Search value={search} onChange={setSearch} />}
          <div className="filters">
            {!!data.length &&
              filters.map(filter => (
                <Filter key={filter.name} filter={filter} onChange={setFilter} />
              ))}
          </div>
        </CardHeader>
        <CardBody>
          <Table cols={cols} data={data} />
        </CardBody>
        <CardFooter>
          <Pagination pagination={pagination} />
        </CardFooter>
      </Card>
    </Grid>
  </div>
)

export default observer(EntityPage)
