import { types, getRoot } from 'mobx-state-tree'
import { uniq } from 'lodash'

export default types
  .model('FilterModel', {
    name: types.maybe(types.string),
    value: types.maybe(types.string)
  })
  .views(self => ({
    get options() {
      return uniq(getRoot(self).data.map(item => item[self.name]))
    }
  }))
