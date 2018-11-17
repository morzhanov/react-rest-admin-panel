import { types } from 'mobx-state-tree'
import TableItemModel from './TableItemModel'
import PaginationModel from './parts/PaginationModel'
import SortModel from './parts/SortModel'
import FilterModel from './parts/FilterModel'

export default types
  .model('TableModel', {
    cols: types.array(TableItemModel),
    filters: types.maybe(types.map(FilterModel), {}),
    sort: types.maybe(SortModel, {}),
    pagination: types.maybe(PaginationModel, {}),
    search: types.maybe(types.string)
  })
  .volatile(() => ({
    onChangeListener: types.function
  }))
  .actions(self => {
    const setOnChangeListener = listener => {
      self.onChangeListener = listener
    }

    const setSort = sort => {
      self.cols.forEach(col => {
        const { head } = col.actions
        if (head.sort && head.sort !== sort) head.sort.resetSort()
      })

      self.sort.name = sort.name
      self.sort.direction = sort.direction

      if (self.onChangeListener) self.onChangeListener('sort')
    }

    return { setOnChangeListener, setSort }
  })
