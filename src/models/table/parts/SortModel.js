import { types, getRoot } from 'mobx-state-tree'

export default types
  .model('SortModel', {
    name: types.maybe(types.string),
    direction: types.maybe(types.boolean)
  })
  .actions(self => {
    const toggleSort = () => {
      const currentDirection = self.direction
      getRoot(self).setSort(self)
      self.direction = typeof currentDirection === 'boolean' ? !currentDirection : true
    }

    const resetSort = () => {
      self.direction = undefined
    }

    return {
      toggleSort,
      resetSort
    }
  })
