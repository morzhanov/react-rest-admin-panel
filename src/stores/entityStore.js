import { types, flow } from 'mobx-state-tree'
import logger from '../utils/logger'
import api from '../utils/api'

const EntityStore = types.model('EntityStore', {}).actions(self => {
  const fetchEntities = flow(function* fetchEntities(url, params) {
    try {
      const res = yield api.get(url, params)
      self.entities = res.data
    } catch (error) {
      logger.error(error)
    }
  })

  const getEntity = flow(function* getEntity(url, id) {
    try {
      const res = yield api.get(`${url}/${id}`)
      return res.data
    } catch (error) {
      logger.error(error)
      return null
    }
  })

  const createEntity = flow(function* createEntity(url, entity) {
    try {
      yield api.post(url, entity)
      self.addEntity(entity)
    } catch (error) {
      logger.error(error)
    }
  })

  const addEntity = entity => {
    self.entities.push(entity)
  }

  const updateEntity = flow(function* updateEntity(url, entity, id) {
    try {
      yield api.put(`${url}/${id}`, entity)
      self.fetchEntities()
    } catch (error) {
      logger.error(error)
    }
  })

  const patchEntity = flow(function* patchEntity(url, entity, id) {
    try {
      yield api.put(`${url}/${id}`, entity)
      self.fetchEntities()
    } catch (error) {
      logger.error(error)
    }
  })

  const deleteEntity = flow(function* deleteEntity(url, id) {
    try {
      yield api.delete(`${url}/${id}`)
      self.fetchEntities()
    } catch (error) {
      logger.error(error)
    }
  })

  return {
    fetchEntities,
    getEntity,
    createEntity,
    addEntity,
    updateEntity,
    patchEntity,
    deleteEntity
  }
})

export default EntityStore
