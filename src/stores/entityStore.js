import { types, flow } from 'mobx-state-tree'
import logger from '../utils/logger'
import api from '../utils/api'

const EntityStore = types
  .model('EntityStore', {
    // INFO: "table", "data" and "url" fields should be provided in child's store
  })
  .actions(self => {
    const afterCreate = () => self.fetch()

    const fetch = flow(function* fetch(url = self.url) {
      const params = {
        sort: self.table.sort,
        size: self.table.pagination.pageSize,
        page: self.table.pagination.pageNumber,
        filters: self.table.filters,
        search: self.table.search
      }
      try {
        const { data } = yield api.get(url, params)
        const { results, count } = data
        self.table.pagination.count = count
        self.data = results
        return self.data
      } catch (error) {
        logger.error(error)
        return null
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

    const create = flow(function* create(entity, url = self.url) {
      try {
        yield api.post(url, entity)
        self.addOne(entity)
      } catch (error) {
        logger.error(error)
      }
    })

    const addOne = entity => {
      self.data.push(entity)
    }

    const update = flow(function* update(entity, id, url = self.url) {
      try {
        yield api.put(`${url}/${id}`, entity)
        self.fetch()
      } catch (error) {
        logger.error(error)
      }
    })

    const patch = flow(function* patch(entity, id, url = self.url) {
      try {
        yield api.put(`${url}/${id}`, entity)
        self.fetch()
      } catch (error) {
        logger.error(error)
      }
    })

    const remove = flow(function* remove(id, url = self.url) {
      try {
        yield api.delete(`${url}/${id}`)
        self.fetch()
      } catch (error) {
        logger.error(error)
      }
    })

    return {
      afterCreate,
      fetch,
      getOne,
      create,
      addOne,
      update,
      patch,
      remove
    }
  })

export default EntityStore
