import { types } from 'mobx-state-tree'

export default types.model('FilterModel', {
  name: types.maybe(types.string),
  value: types.maybe(types.string),
  options: types.array(types.string)
})
