import { types } from 'mobx-state-tree'
import EntityStore from '../../../../stores/entityStore'
import UserModel from './UserModel'

const UserStore = types.model('UserStore', {
  entities: types.optional(types.array(UserModel), [])
})

const UserEntityStore = types
  .compose(
    UserStore,
    EntityStore
  )
  .named('UserEntityStore')

export default UserEntityStore
