import React from 'react'
import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import apiUrls from '../../../../utils/apiUrls'
import EntityPage from '../base/EntityPage/EntityPage'
import createTableConfig from './userTableConfig'
import logger from '../../../../utils/logger'

@inject('userStore')
@observer
class Users extends React.Component {
  @observable
  table = createTableConfig(this.onTableDataChange)

  async componentDidMount() {
    await this.fetchData()
  }

  onTableDataChange = type => {
    logger.log(type)
    this.fetchData()
  }

  fetchData = async () => {
    const { userStore } = this.props
    const params = {
      sort: this.table.sort,
      size: this.table.pagination.pageSize,
      page: this.table.pagination.pageNumber,
      filters: this.table.filters,
      search: this.table.search
    }
    const count = await userStore.fetch(apiUrls.fake.users, params)
    this.table.pagination.setCount(count)
  }

  render() {
    const { userStore } = this.props
    return (
      <EntityPage
        data={userStore.data}
        table={this.table}
        title="User"
        subtitle="User entity"
        fetchData={this.fetchData}
      />
    )
  }
}

export default Users
