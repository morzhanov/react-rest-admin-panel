import { types } from 'mobx-state-tree'
import EntityStore from '../EntityStore'
import UserModel from '../../models/entities/UserModel'

const UserStore = types.model('UserStore', {
  data: types.optional(types.array(UserModel), [])
})

const UserEntityStore = types
  .compose(
    UserStore,
    EntityStore
  )
  .named('UserEntityStore')

export default UserEntityStore
