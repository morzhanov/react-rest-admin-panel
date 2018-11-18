import { includes, sortBy, filter } from 'lodash'
import login from './fixtures/auth/login'
import signup from './fixtures/auth/signup'
import user from './fixtures/user'
import { users, usersFilters } from './fixtures/users'
import tasks from './fixtures/tasks'
import urls from './apiUrls'

const fakeAPi = {
  login,
  signup,
  user,
  tasks,
  users,
  usersFilters,

  // INFO: performing GET request to fetch entities
  // With sorting, filters, search and pagination
  async get(url, params = {}) {
    const { size, page, sort, filters, search } = params
    if (
      includes(
        [urls.fake.login, urls.fake.signup, urls.fake.user, urls.fake.usersFilters],
        url
      )
    ) {
      return { data: this[url] }
    }

    let data = this[url]

    // INFO: in this example we only implement filtering by type field
    // On your server it's up to you how to filter items
    if (filters[0]) {
      data = filter(data, el => el.type === filters[0])
    }

    // INFO: in this example we only implement search by "name" key
    // On your server it's up to you how to search items
    if (search) data = filter(data, el => el.name.indexOf(search) >= 0)

    if (sort) {
      data =
        sort[0] === '-'
          ? sortBy(data, [`${[sort.substring(1)]}`])
          : sortBy(data, [`${[sort]}`]).reverse()
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
