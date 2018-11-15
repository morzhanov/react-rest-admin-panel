import UiStore from './rootStore'
import RouterStore from './routerStore'
import UserModel from '../models/UserModel'
import userData from '../fixtures/user'

// TODO: remove dev logic
// TODO: inject all stores for entities or create single entity store for each entity
if (!localStorage.getItem('user')) {
  localStorage.setItem('user', JSON.stringify(userData))
}

const createStore = history => {
  let user
  const localStorageUser = localStorage.getItem('user')
  if (localStorageUser) {
    user = UserModel.create(JSON.parse(localStorageUser))
  }
  const rootStore = UiStore.create({ user }, { user: UserModel })
  const router = new RouterStore(history)
  return {
    rootStore,
    router
  }
}

export default createStore
