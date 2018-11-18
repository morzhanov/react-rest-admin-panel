import { types, getRoot } from 'mobx-state-tree'
import TableItemModel from './TableItemModel'
import PaginationModel from './parts/PaginationModel'
import SortModel from './parts/SortModel'
import FilterModel from './parts/FilterModel'

export default types
  .model('TableModel', {
    cols: types.array(TableItemModel),
    filters: types.maybe(types.array(FilterModel), []),
    sort: types.maybe(SortModel, {}),
    pagination: types.maybe(PaginationModel, {}),
    search: types.maybe(types.string, '')
  })
  .actions(self => {
    const setFilter = (name, value) => {
      self.filters[0].value = value
      getRoot(self).fetch()
    }

    const setSearch = search => {
      self.search = search
      getRoot(self).fetch()
    }

    const setSort = sort => {
      self.cols.forEach(col => {
        const { head } = col.actions
        if (head.sort && head.sort !== sort) head.sort.resetSort()
      })

      self.sort.name = sort.name
      self.sort.direction = sort.direction
      getRoot(self).fetch()
    }

    return { setSort, setSearch, setFilter }
  })