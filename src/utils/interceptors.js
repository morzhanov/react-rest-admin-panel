import axios from 'axios'
import assistant from './assistant'

export const setupInterceptors = () =>
  axios.interceptors.response.use(
    res => res,
    err => {
      if (err.response && err.response.status === 401) {
        assistant.logOut()
      }
      return Promise.reject(err)
    }
  )
