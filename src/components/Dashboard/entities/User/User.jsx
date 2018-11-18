import React from 'react'
import { inject, observer } from 'mobx-react'
// import apiUrls from '../../../../utils/apiUrls'
import EntityPage from '../base/EntityPage/EntityPage'

@inject('userStore')
@observer
class Users extends React.Component {
  render() {
    const { userStore } = this.props
    return (
      <EntityPage
        store={userStore}
        table={this.table}
        title="User"
        subtitle="User entity"
      />
    )
  }
}

export default Users
