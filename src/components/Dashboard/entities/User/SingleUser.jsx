import React from 'react'
import { inject, observer } from 'mobx-react'
import SingleEntityPage from '../base/SingleEntityPage/SingleEntityPage'

const SingleUser = ({ userStore }) => (
  <SingleEntityPage store={userStore} title="User" subtitle="User entity" />
)

export default inject('userStore')(observer(SingleUser))
