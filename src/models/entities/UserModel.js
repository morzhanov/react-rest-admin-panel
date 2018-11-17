import { types } from 'mobx-state-tree'
import Entity from '../EntityModel'

const User = types.model('User', {
  email: types.string,
  name: types.string
})

export default types.compose(
  Entity,
  User
)
