import { types, flow } from 'mobx-state-tree'
import { toast } from 'react-toastify'
import api from '../utils/api'
import apiUrls from '../utils/apiUrls'
import logger from '../utils/logger'

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
  .actions(self => {
    const changePassword = flow(function* changePassword(data) {
      try {
        const res = yield api.post(apiUrls.fake.changePassword, data)
        logger.log('password changed')
        toast.success('Password successfully changed!')
        return res
      } catch (error) {
        logger.error(error)
        toast.error(error.message)
        return null
      }
    })

    return { changePassword }
  })

export default User
