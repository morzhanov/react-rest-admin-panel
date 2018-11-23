import RootStore from './RootStore'
import RouterStore from './RouterStore'
import AdminModel from '../models/AdminModel'
import entities from '../entities'
import createEntityStore from './createEntityStore'

const createStore = history => {
  let admin
  const localStorageUser = localStorage.getItem('admin')
  if (localStorageUser) {
    admin = AdminModel.create(JSON.parse(localStorageUser))
  }
  const rootStore = RootStore.create({ admin }, { admin: AdminModel })
  const router = new RouterStore(history)

  const resultStore = {
    rootStore,
    router
  }

  entities.forEach(entity => {
    resultStore[`${entity.name}Store`] = createEntityStore(entity)
  })

  return resultStore
}

export default createStore
