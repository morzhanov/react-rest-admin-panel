import { types } from 'mobx-state-tree'

const UserModel = types.model('UserModel', {
  name: types.maybe(types.string)
})

export default UserModel
