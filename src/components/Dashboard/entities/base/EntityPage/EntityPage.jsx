import React from 'react'
import './EntityPage.styl'
import { observer } from 'mobx-react'
import { compose, withState, withHandlers } from 'recompose'
import Grid from '../../../../shared/Grid/Grid'
import Table from '../../../../shared/Table/Table'
import { Card, CardBody, CardHeader, CardFooter } from '../../../../shared/Card/Card'
import Pagination from '../../../../shared/Pagination/Pagination'
import Search from '../../../../shared/Search/Search'

const EntityPage = ({
  title,
  subtitle,
  data,
  fetchData,
  onSearchChange,
  table: { cols, pagination, searchValue, filters }
}) => (
  <Grid>
    <Card className="entity-page">
      <CardHeader>
        <h4 className="title">{title}</h4>
        <p className="subtitle">{subtitle}</p>
        <Search value={searchValue} onChange={onSearchChange} />
      </CardHeader>
      <CardBody>
        <Table cols={cols} data={data} />
      </CardBody>
      <CardFooter>
        <Pagination pagination={pagination} onChangePageNumber={fetchData} />
      </CardFooter>
    </Card>
  </Grid>
)

export default observer(
  compose(
    withState('searchValue', 'changeSearch', ''),
    withHandlers({
      onSearchChange: ({ table: { setSearch }, changeSearch, fetchData }) => event => {
        changeSearch(event.target.value)
        setSearch(event.target.value)
        fetchData()
      }
    })
  )(EntityPage)
)
