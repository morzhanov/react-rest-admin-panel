import UiStore from './uiStore'
import RouterStore from './routerStore'
import UserModel from '../models/UserModel'

export function createStores(history, user) {
  const uiStore = UiStore.create({ user }, { user: UserModel })
  const routerStore = new RouterStore(history)
  return {
    uiStore,
    routerStore
  }
}
