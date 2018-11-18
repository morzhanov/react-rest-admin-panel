import React from 'react'
import { inject, observer } from 'mobx-react'
import EntityPage from '../base/EntityPage/EntityPage'

const User = ({ userStore }) => (
  <EntityPage store={userStore} title="User" subtitle="User entity" />
)

export default inject('userStore')(observer(User))
