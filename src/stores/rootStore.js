import { types, flow } from 'mobx-state-tree'
import api from '../utils/api'
import apiUrls from '../utils/apiUrls'
import logger from '../utils/logger'
import UserModel from '../models/AdminModel'

const rootStore = types
  .model('rootStore', {
    admin: types.optional(types.maybe(UserModel), undefined)
  })
  .actions(self => {
    const fetchAdmin = flow(function* fetchAdmin() {
      try {
        // INFO: replace fake API call with appropriate one
        const res = yield api.get(apiUrls.fake.admin)
        self.admin = res.data
        localStorage.setItem('admin', JSON.stringify(res.data))
      } catch (error) {
        logger.error(error)
      }
    })

    return {
      fetchAdmin
    }
  })

export default rootStore
