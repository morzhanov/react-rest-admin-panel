import { types, flow } from 'mobx-state-tree'
import logger from '../utils/logger'
import api from '../utils/api'

const EntityStore = types
  .model('EntityStore', {
    // INFO: "data" field should be provided in child's store
  })
  .actions(self => {
    const fetch = flow(function* fetch(url, params) {
      try {
        const { data } = yield api.get(url, params)
        const { results, count } = data
        self.data = results
        return count
      } catch (error) {
        logger.error(error)
        return null
      }
    })

    const getOne = flow(function* getOne(url, id) {
      try {
        const res = yield api.get(`${url}/${id}`)
        return res.data
      } catch (error) {
        logger.error(error)
        return null
      }
    })

    const create = flow(function* create(url, entity) {
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

    const update = flow(function* update(url, entity, id) {
      try {
        yield api.put(`${url}/${id}`, entity)
        self.fetch()
      } catch (error) {
        logger.error(error)
      }
    })

    const patch = flow(function* patch(url, entity, id) {
      try {
        yield api.put(`${url}/${id}`, entity)
        self.fetch()
      } catch (error) {
        logger.error(error)
      }
    })

    const remove = flow(function* remove(url, id) {
      try {
        yield api.delete(`${url}/${id}`)
        self.fetch()
      } catch (error) {
        logger.error(error)
      }
    })

    return {
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
