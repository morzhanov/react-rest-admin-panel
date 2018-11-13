import { types } from 'mobx-state-tree'
import { DataTableItem } from './DataTableItem.model'
import { ListModel } from './List.model'

const Table = types
  .model('DataTable', {
    cols: types.array(DataTableItem),
    globalActions: types.frozen()
  })
  .actions(self => {
    const resetTableSorting = () => {
      self.cols.forEach(col => {
        const { sort } = col.actions.head
        sort && sort.resetSorting()
      })
    }
    return {
      resetTableSorting
    }
  })

export const DataTable = types.compose(
  Table,
  ListModel
)
