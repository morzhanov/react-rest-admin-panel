import { types, flow } from 'mobx-state-tree'
import { filter, find } from 'lodash'
import logger from '../utils/logger'
import api from '../utils/api'

const EntityStore = types
  .model('EntityStore', {
    // INFO: "table", "data", "url" and "filtersUrl" fields
    // should be provided in child's store
  })
  .actions(self => {
    const getItemById = id => find(self.data, { id })

    const fetchData = flow(function* fetchData(url = self.url) {
      // INFO: this params configuration might be changed depending on your server's logic
      const params = {
        sort: `${self.table.sort.direction ? '' : '-'}${self.table.sort.name}`,
        size: self.table.pagination.pageSize,
        page: self.table.pagination.pageNumber,
        search: self.table.search
      }
      params.filters = filter(self.table.filters, f => f.value).map(f => f.value)
      try {
        const { data } = yield api.get(url, params)
        const { results, count } = data
        self.table.pagination.count = count
        self.data = results
        if (self.filtersUrl) self.fetchFilters()
        return self.data
      } catch (error) {
        logger.error(error)
        return null
      }
    })

    const fetchFilters = flow(function* fetchFilters() {
      try {
        const { data } = yield api.get(self.filtersUrl)
        // eslint-disable-next-line
        data.map(item => {
          find(self.table.filters, f => f.name === item.name).options = item.options
        })
      } catch (error) {
        logger.error(error)
      }
    })

    const getOne = flow(function* getOne(id, url = self.url) {
      try {
        const res = yield api.get(`${url}/${id}`)
        return res.data
      } catch (error) {
        logger.error(error)
        return null
      }
    })

    const addOne = entity => {
      self.data.push(entity)
    }

    return {
      getItemById,
      fetchData,
      fetchFilters,
      getOne,
      addOne
    }
  })

export default EntityStore
