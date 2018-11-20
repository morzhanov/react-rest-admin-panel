import { types, flow } from 'mobx-state-tree'
import logger from '../utils/logger'
import api from '../utils/api'

const Entity = types
  .model('Entity', {
    id: types.integer
  })
  .actions(self => {
    const fetch = flow(function* fetch(id, url = self.url) {
      try {
        const data = yield api.get(`${url}/${id}`)
        Object.keys(data).forEach(key => {
          self[key] = data[key]
        })
        return data
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
      fetch,
      create,
      update,
      patch,
      remove
    }
  })

export default Entity
