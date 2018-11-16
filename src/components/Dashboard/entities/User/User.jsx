import React from 'react'
import { inject, observer } from 'mobx-react'
import EntityPage from '../base/EntityPage/EntityPage'
import { usersEntityConfig } from './UserTableConfig'

const Users = ({ usersStore }) => (
  <EntityPage
    data={usersStore.entities}
    cols={usersEntityConfig.cols}
    title="Users"
    subtitle="Users entity"
  />
)

export default inject('usersStore')(observer(Users))
