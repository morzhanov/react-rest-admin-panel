import { types } from 'mobx-state-tree'
import UserModel from '../models/UserModel'

const rootStore = types.model('rootStore', {
  user: types.optional(types.maybe(UserModel), undefined)
})

export default rootStore
