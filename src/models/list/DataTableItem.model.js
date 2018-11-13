import { getRoot, types } from 'mobx-state-tree'

const DataTableItemActions = types.model('DataTableItemActions', {
  head: types.optional(
    types.model({
      sort: types.maybe(
        types
          .model({
            name: types.string,
            actionKey: 'onSort',
            sortKey: 'ordering',
            direction: types.maybe(types.boolean)
          })
          .views(self => ({
            get tableOrdering() {
              return getRoot(self).sort.get(self.sortKey)
            }
          }))
          .actions(self => {
            const onChangeSortDirection = () => {
              const currentDirection = self.direction
              getRoot(self).resetTableSorting()
              self.direction =
                typeof currentDirection === 'boolean' ? !currentDirection : true
              const cb = getRoot(self).globalActions[self.actionKey]

              if (self.tableOrdering && cb) {
                self.tableOrdering.onChange(`${self.direction ? '' : '-'}${self.name}`)
                cb()
              }
            }

            const setInitialValue = value => {
              const valueDirection = value[0] === '-'

              if (valueDirection) {
                value = value.substr(1)
              }

              if (value === self.name) {
                self.direction = !valueDirection
              }
            }

            const resetSorting = () => {
              self.direction = null
            }

            return {
              onChangeSortDirection,
              resetSorting,
              afterAttach() {
                if (self.tableOrdering) {
                  setInitialValue(self.tableOrdering.value)
                }
              }
            }
          })
      )
    }),
    {}
  ),
  body: types.optional(
    types.model({
      custom: types.optional(types.frozen(), {}),
      tdClassName: ''
    }),
    {}
  )
})

export const DataTableItem = types
  .model('DataTableItem', {
    name: types.optional(types.string, ''),
    shortName: types.optional(types.string, ''),
    pathToValue: types.optional(types.frozen(), []),
    pathToParam: types.optional(types.frozen(), []),
    actions: types.optional(DataTableItemActions, {})
  })
  .views(self => {
    const isPrimitive = value => {
      const type = typeof value
      return value === null || (type !== 'object' && type !== 'function')
    }
    const getValueWithArrayOfKeys = (data, keys) => {
      if (!Array.isArray(keys)) {
        throw new Error('argument "keys" should be an array')
      }

      if (!keys.length) return data

      let startFrom = 0

      function keyRecursion(data) {
        startFrom++
        return isPrimitive(data) || keys.length === startFrom
          ? data
          : keyRecursion(data[keys[startFrom]])
      }

      return keyRecursion(data[keys[startFrom]])
    }

    return {
      getValue(data) {
        return getValueWithArrayOfKeys(data, self.pathToValue)
      },
      getParam(data) {
        return getValueWithArrayOfKeys(data, self.pathToParam)
      }
    }
  })
