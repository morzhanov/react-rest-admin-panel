import axios from 'axios'
// -
import { baseAPIUrl } from './constants'
import AuthSession from './AuthSession'
import Logger from './Logger'

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Accept-Language'] = 'en'
axios.defaults.headers['demo-access-token'] = localStorage.getItem(
  AuthSession.adminKey
)
axios.defaults.baseURL = baseAPIUrl()
axios.interceptors.response.use(
  response => response,
  error => {
    try {
      if (
        error.response &&
        error.response.data.detail &&
        error.response.data.detail.toLowerCase().includes('invalid token.')
      ) {
        AuthSession.remove()
        window.location.reload(true)
      }
    } catch (err) {
      Logger.error(err)
    }
    return Promise.reject(error)
  }
)

class API {
  static getData(url, params) {
    return axios({
      method: 'GET',
      url,
      params
    })
  }

  static postData(url, data) {
    return axios({
      method: 'POST',
      url,
      data
    })
  }

  static patchData(url, data) {
    return axios({
      method: 'PATCH',
      url,
      data
    })
  }

  static putData(url, data) {
    return axios({
      method: 'PUT',
      url,
      data
    })
  }

  static deleteData(url, data) {
    return axios({
      method: 'DELETE',
      url,
      data
    })
  }
}

// TODO: add valid api endpoint and remove faker
export default (baseAPIUrl ? API : import('./fakeApi'))
