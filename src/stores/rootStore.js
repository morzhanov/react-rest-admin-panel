import { types, flow } from 'mobx-state-tree'
import { toast } from 'react-toastify'
import { logOut } from '../utils/helpers'
import api from '../utils/api'
import apiUrls from '../utils/apiUrls'
import logger from '../utils/logger'
import UserModel from '../models/AdminModel'

const rootStore = types
  .model('rootStore', {
    admin: types.optional(types.maybe(UserModel), undefined)
  })
  .actions(self => {
    const afterCreate = () => {
      const token = localStorage.getItem('token')
      if (token) {
        api.setHeader('authorization', token)
      }
    }

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

    const login = flow(function* login(data) {
      try {
        const {
          data: { token }
        } = yield api.get(apiUrls.fake.auth, data)
        localStorage.setItem('token', token)
        logger.log('logged in')
        toast.success('Successfully logged in!')
        return token
      } catch (error) {
        logger.error(error)
        toast.error(error.message)
        return null
      }
    })

    return {
      afterCreate,
      fetchAdmin,
      logOut,
      login
    }
  })

export default rootStore
