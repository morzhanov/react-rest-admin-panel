import axios from 'axios'

class FakeApi {
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

// TODO: add server and replace fixtures with it
export default FakeApi
