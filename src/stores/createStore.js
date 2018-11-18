import UiStore from './RootStore'
import RouterStore from './RouterStore'
import AdminModel from '../models/AdminModel'
// entities
import userStore from './entities/User/userStore'

const createStore = history => {
  let user
  const localStorageUser = localStorage.getItem('user')
  if (localStorageUser) {
    user = AdminModel.create(JSON.parse(localStorageUser))
  }
  const rootStore = UiStore.create({ user }, { user: AdminModel })
  const router = new RouterStore(history)

  return {
    rootStore,
    router,
    // entitites
    userStore
  }
}

export default createStore
