import UiStore from './RootStore'
import RouterStore from './RouterStore'
import AdminModel from '../models/AdminModel'
// entities
import UserStore from './entities/UserStore'

const createStore = history => {
  let user
  const localStorageUser = localStorage.getItem('user')
  if (localStorageUser) {
    user = AdminModel.create(JSON.parse(localStorageUser))
  }
  const rootStore = UiStore.create({ user }, { user: AdminModel })
  const router = new RouterStore(history)
  // entities
  const userStore = UserStore.create({})
  return {
    rootStore,
    router,
    // entitites
    userStore
  }
}

export default createStore
