import React from 'react'
import './EntityPage.styl'
import { withRouter } from 'react-router-dom'
import { lifecycle } from 'recompose'
import { observer } from 'mobx-react'
import Grid from '../../../shared/Grid/Grid'
import Table from '../../../shared/Table/Table'
import Card from '../../../shared/Card/Card'
import Pagination from '../../../shared/Pagination/Pagination'
import Search from '../../../shared/Search/Search'
import Filter from '../../../shared/Filter/Filter'

const EntityPage = ({
  title,
  subtitle,
  history,
  store: {
    data,
    table: { cols, pagination, search, filters, setFilter, setSearch },
    url
  }
}) => {
  const handleAddNewClick = () => history.push(`${url}/add`)
  return (
    <div className="entity-page">
      <Grid>
        <Card>
          <Card className="card__header">
            <h4 className="title">{title}</h4>
            <p className="subtitle">{subtitle}</p>
            {!!data.length && <Search value={search} onChange={setSearch} />}
            <div className="card__row">
              <button type="button" onClick={handleAddNewClick}>
                Add new
              </button>
              <div className="filters">
                {!!data.length &&
                  filters.map(filter => (
                    <Filter key={filter.name} filter={filter} onChange={setFilter} />
                  ))}
              </div>
            </div>
          </Card>
          <Card className="card__body">
            <Table cols={cols} data={data} />
          </Card>
          <Card className="card__footer">
            <Pagination pagination={pagination} />
          </Card>
        </Card>
      </Grid>
    </div>
  )
}

const withDidMount = lifecycle({
  componentDidMount() {
    const { store } = this.props
    store.fetchData()
  }
})

export default withDidMount(withRouter(observer(EntityPage)))
