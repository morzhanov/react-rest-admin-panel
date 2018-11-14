import { types } from 'mobx-state-tree'

const User = types
  .model('User', {
    id: types.integer,
    email: types.string,
    name: types.string
  })
  .views(self => ({
    get fullName() {
      return `${self.name}`
    }
  }))
  .actions(self => ({
    changePassword() {
      console.log('changing password')
    }
  }))

export default User
