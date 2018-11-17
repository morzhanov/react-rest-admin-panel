import { includes, sortBy, filter } from 'lodash'
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

  // INFO: performing GET request to fetch entities
  // With sorting, filters, search and pagination
  async get(url, params = {}) {
    const { size, page, sort, filters, search } = params
    if (includes([urls.fake.login, urls.fake.signup, urls.fake.user], url)) {
      return { data: this[url] }
    }

    let data = this[url]

    // INFO: in this example we only implement search by "name" key
    // On your server it's up to you
    if (search) data = filter(data, el => el.name.indexOf(search) >= 0)

    if (sort) {
      data = sort.direction
        ? sortBy(data, [`${[sort.name]}`]).reverse()
        : sortBy(data, [`${[sort.name]}`])
    }

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
