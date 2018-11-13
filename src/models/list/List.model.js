import { types, applySnapshot } from 'mobx-state-tree'
import { PureField } from '../form/PureField.model'
import { Pagination } from './Pagination.model'

export const ListModel = types
  .model('ListModel', {
    url: types.string,
    filters: types.optional(types.map(PureField), {}),
    sort: types.optional(types.map(PureField), {}),
    pagination: types.optional(Pagination, {}),

    isPending: false
  })
  .views(self => ({
    get params() {
      return {
        ...self.filtersData,
        ...self.pagination.data,
        ...self.sortData
      }
    },
    get filtersData() {
      const data = {}
      self.filters.forEach(filter => {
        if (filter.value) data[filter.name] = filter.value
      })
      return data
    },
    get sortData() {
      const data = {}
      self.sort.forEach(sort => {
        if (sort.value) data[sort.name] = sort.value
      })
      return data
    }
  }))
  .actions(self => {
    const setPendingStatus = bool => {
      self.isPending = bool
    }

    const onSubmit = request => {
      if (!self.isPending) {
        if (!request || typeof request !== 'function') {
          throw new Error(
            'Property "request" is required and this property must be a function!',
            'List.model.js'
          )
        }
        self.setPendingStatus(true)
        request(self.url, self.params)
          .then(response => {
            self.setPendingStatus(false)
            applySnapshot(self.pagination, {
              pageSize: self.pagination.pageSize,
              ...response
            })
          })
          .catch(() => {
            self.setPendingStatus(false)
          })
      }
    }

    return {
      onSubmit,
      setPendingStatus
    }
  })
