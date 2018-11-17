import { types } from 'mobx-state-tree'
import SortModel from './parts/SortModel'

const TableItemActions = types.model('DataTableItemActions', {
  head: types.optional(
    types.model({
      sort: types.maybe(SortModel),
      custom: types.maybe(types.frozen(), {}),
      className: types.maybe(types.string)
    }),
    {}
  ),
  body: types.optional(
    types.model({
      custom: types.maybe(types.frozen(), {}),
      className: types.maybe(types.string)
    }),
    {}
  )
})

export default types.model('TableItem', {
  title: types.maybe(types.string, ''),
  name: types.maybe(types.string, ''),
  actions: types.maybe(TableItemActions, {})
})
