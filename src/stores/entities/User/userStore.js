import { types } from 'mobx-state-tree'
import apiUrls from '../../../utils/apiUrls'
import EntityStore from '../../EntityStore'
import UserModel from '../../../models/entities/UserModel'
import TableModel from '../../../models/table/TableModel'
import userTableModel from './userTableModel'

const UserStore = types.model('UserStore', {
  data: types.optional(types.array(UserModel), []),
  // INFO: Base entity API Uri, could be changed in a CRUD methods as last param
  url: apiUrls.fake.users,
  filtersUrl: apiUrls.fake.usersFilters,
  table: TableModel
})

const UserEntityStore = types
  .compose(
    UserStore,
    EntityStore
  )
  .named('UserEntityStore')

export default UserEntityStore.create({ table: userTableModel })
