import { includes } from 'lodash'
import login from './fixtures/auth/login'
import signup from './fixtures/auth/signup'
import user from './fixtures/user'
import users from './fixtures/users'
import tasks from './fixtures/tasks'
import urls from './apiUrls'

const fakeAPi = {
  login,
  signup,
  user,
  tasks,
  users,

  async get(url, { size, page, sort, filters, search } = {}) {
    if (includes([urls.fake.login, urls.fake.signup, urls.fake.user], url)) {
      return { data: this[url] }
    }

    let data = this[url]
    const count = data.length
    if (size) {
      if (page) {
        data = data.slice((size - 1) * (page - 1), (size - 1) * page)
      }
      data = data.slice(0, size - 1)
    }

    return { data: { results: data, count } }
  },

  async post(url, data) {
    const res = this[url]
    res.push(data)
    return { data: res }
  },

  async patch(url, data) {
    // TODO: implement
  },

  async put(url, data) {
    // TODO: implement
  },

  async delete(url, data) {
    // TODO: implement
  }
}

export default fakeAPi
