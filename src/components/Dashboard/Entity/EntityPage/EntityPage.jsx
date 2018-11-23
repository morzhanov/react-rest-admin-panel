import React from 'react'
import './EntityPage.styl'
import { toast } from 'react-toastify'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import Grid from '../../../shared/Grid/Grid'
import Table from '../../../shared/Table/Table'
import Card from '../../../shared/Card/Card'
import Pagination from '../../../shared/Pagination/Pagination'
import Search from '../../../shared/Search/Search'
import Filter from '../../../shared/Filter/Filter'
import DeleteEntityModal from '../EntityItemPage/parts/DeleteEntityModal'
import { capitalize } from '../../../../utils/helpers'

class EntityPage extends React.Component {
  constructor(props) {
    super(props)
    this.deleteEntityModal = React.createRef()
  }

  componentDidMount() {
    const { store } = this.props
    store.fetchData()
  }

  deleteItem = async ({ name, id }) => {
    const { store } = this.props
    await store.getItemById(id).remove(id)
    toast.success(`${capitalize(name)} item successfully deleted`)
  }

  handleAddNewClick = () => {
    const { history } = this.props
    history.push('add')
  }

  render() {
    const {
      title,
      subtitle,
      store: {
        data,
        table: {
          cols,
          pagination,
          isPending,
          search,
          filters,
          setFilter,
          setSearch,
          customHeadElements,
          customBodyElements
        }
      }
    } = this.props
    return (
      <div className="entity-page">
        <Grid>
          <Card>
            <Card className="card__header">
              <h4 className="title">{title}</h4>
              <p className="subtitle">{subtitle}</p>
              <Search value={search} onChange={setSearch} />
              <div className="card__row">
                <button type="button" onClick={this.handleAddNewClick}>
                  Add new
                </button>
                <div className="filters">
                  {filters.map(filter => (
                    <Filter key={filter.name} filter={filter} onChange={setFilter} />
                  ))}
                </div>
              </div>
            </Card>
            <div className="entity-page__body-wrapper">
              <Card className="card__body">
                <Table
                  customHeadElements={customHeadElements}
                  customBodyElements={customBodyElements}
                  cols={cols}
                  data={data}
                  deleteEntityModal={this.deleteEntityModal}
                  isPending={isPending}
                />
              </Card>
            </div>
            <Card className="card__footer">
              <Pagination pagination={pagination} />
            </Card>
          </Card>
        </Grid>
        <DeleteEntityModal onOk={this.deleteItem} ref={this.deleteEntityModal} />
      </div>
    )
  }
}

export default withRouter(observer(EntityPage))
