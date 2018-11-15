import React from 'react'
import EntityPage from '../base/EntityPage/EntityPage'
import { usersEntityConfig } from './config'
import TableData from './UsersStore'

const Users = () => (
  <EntityPage
    data={TableData}
    cols={usersEntityConfig.cols}
    title="Users"
    subtitle="Users entity"
  />
)

export default Users
