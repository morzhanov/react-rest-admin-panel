import axios from 'axios'
import { baseApiUrl } from './constants'
import fakeApi from './fakeApi'
import { setupInterceptors } from './interceptors'

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Accept-Language'] = 'en'
axios.defaults.baseURL = baseApiUrl

setupInterceptors()

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
  },

  setHeader(name, data) {
    axios.defaults.headers[name] = data
  }
}

// INFO: add valid api endpoint and remove fake API
export default (baseApiUrl ? api : fakeApi)
