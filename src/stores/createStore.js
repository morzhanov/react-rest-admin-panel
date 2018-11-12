import UiStore from './uiStore'
import RouterStore from './routerStore'
import UserModel from '../models/UserModel'
import userData from '../fixtures/user'

// TODO: remove dev logic
if (!localStorage.getItem('user')) {
  localStorage.setItem('user', JSON.stringify(userData))
}

const createStore = history => {
  let user
  const localStorageUser = localStorage.getItem('user')
  if (localStorageUser) {
    user = UserModel.create(JSON.parse(localStorageUser))
  }
  const uiStore = UiStore.create({ user }, { user: UserModel })
  const routerStore = new RouterStore(history)
  return {
    uiStore,
    routerStore
  }
}

export default createStore
