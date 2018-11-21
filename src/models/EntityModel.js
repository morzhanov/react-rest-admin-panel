import { types, flow } from 'mobx-state-tree'
import { toast } from 'react-toastify'
import logger from '../utils/logger'
import api from '../utils/api'
import { UpdateEntityUrlMethod } from '../entities/user'

const Entity = types
  .model('Entity', {
    id: types.optional(types.integer, 0)
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
        toast.error(error.message)
        return null
      }
    })

    const create = flow(function* create(entity, url = self.url) {
      try {
        return yield api.post(url, entity)
      } catch (error) {
        logger.error(error)
        toast.error(error.message)
        return null
      }
    })

    const update = flow(function* update(entity, id, method, url = self.url) {
      try {
        return method === UpdateEntityUrlMethod.PUT
          ? yield api.put(`${url}/${id}`, entity)
          : yield api.patch(`${url}/${id}`, entity)
      } catch (error) {
        logger.error(error)
        toast.error(error.message)
        return null
      }
    })

    const remove = flow(function* remove(id, url = self.url) {
      try {
        yield api.delete(`${url}/${id}`)
      } catch (error) {
        logger.error(error)
        toast.error(error.message)
      }
    })

    return {
      fetch,
      create,
      update,
      remove
    }
  })

export default Entity
