import { types } from 'mobx-state-tree'
import UserModel from '../models/UserModel'

const uiStore = types.model('uiStore', {
  user: types.optional(types.maybe(UserModel), undefined)
})

export default uiStore
