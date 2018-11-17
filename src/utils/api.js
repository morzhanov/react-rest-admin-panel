import axios from 'axios'
import { baseApiUrl } from './constants'
// import AuthSession from './AuthSession'
import logger from './logger'
import fakeApi from './fakeApi'

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Accept-Language'] = 'en'
// axios.defaults.headers['demo-access-token'] = localStorage.getItem(AuthSession.adminKey)
axios.defaults.baseURL = baseApiUrl

axios.interceptors.response.use(
  response => response,
  error => {
    try {
      if (
        error.response &&
        error.response.data.detail &&
        error.response.data.detail.toLowerCase().includes('invalid token.')
      ) {
        // AuthSession.remove()
        window.location.reload(true)
      }
    } catch (err) {
      logger.error(err)
    }
    return Promise.reject(error)
  }
)

const api = {
  get(url, params) {
    return axios({
      method: 'GET',
      url,
      params
    })
  },

  post(url, data) {
    return axios({
      method: 'POST',
      url,
      data
    })
  },

  patch(url, data) {
    return axios({
      method: 'PATCH',
      url,
      data
    })
  },

  put(url, data) {
    return axios({
      method: 'PUT',
      url,
      data
    })
  },

  delete(url, data) {
    return axios({
      method: 'DELETE',
      url,
      data
    })
  }
}

// INFO: add valid api endpoint and remove fake API
export default (baseApiUrl ? api : fakeApi)
