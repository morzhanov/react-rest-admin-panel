import axios from 'axios'
import { logOut } from './helpers'

export const setupInterceptors = () =>
  axios.interceptors.response.use(
    res => res,
    err => {
      if (err.response && err.response.status === 401) {
        logOut()
      }
      return Promise.reject(err)
    }
  )
