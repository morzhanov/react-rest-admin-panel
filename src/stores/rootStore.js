import { types, flow } from 'mobx-state-tree'
import api from '../utils/api'
import apiUrls from '../utils/apiUrls'
import logger from '../utils/logger'
import UserModel from '../models/AdminModel'

const rootStore = types
  .model('rootStore', {
    user: types.optional(types.maybe(UserModel), undefined)
  })
  .actions(self => {
    const fetchUser = flow(function* fetchUser() {
      try {
        // INFO: replace fake API call with appropriate one
        const res = yield api.get(apiUrls.fake.user)
        self.user = res.data
        localStorage.setItem('user', JSON.stringify(res.data))
      } catch (error) {
        logger.error(error)
      }
    })

    return {
      fetchUser
    }
  })

export default rootStore
