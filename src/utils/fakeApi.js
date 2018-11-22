import { includes, sortBy, filter } from 'lodash'
import login from './fixtures/auth/login'
import signup from './fixtures/auth/signup'
import admin from './fixtures/admin'
import { user, userFilters } from './fixtures/user'
import { task, taskFilters } from './fixtures/task'
import urls from './apiUrls'

const fakeAPi = {
  login,
  signup,
  admin,
  task,
  user,
  userFilters,
  taskFilters,

  // INFO: performing GET request to fetch entities
  // With sorting, filters, search and pagination
  async get(url, params = {}) {
    const { size, page, sort, filters, search } = params
    if (
      includes(
        [
          urls.fake.login,
          urls.fake.signup,
          urls.fake.admin,
          urls.fake.userFilters,
          urls.fake.taskFilters
        ],
        url
      )
    ) {
      return { data: this[url] }
    }

    const entityId = url.substring(url.lastIndexOf('/') + 1)
    if (Number.isInteger(+entityId)) {
      return this.getSingleEntity(url, entityId)
    }

    let data = this[url]

    if (filters.length) {
      filters.forEach(({ value, name }) => {
        data = filter(data, el => el[name] === value)
      })
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
        data = data.slice(size * (page - 1), size * page)
      } else {
        data = data.slice(0, size)
      }
    }

    return { data: { results: data, count } }
  },

  async getSingleEntity(url, entityId) {
    const entityName = url.substring(0, url.lastIndexOf('/'))
    return this[entityName][entityId - 1]
  },

  checkForErrorField(data) {
    return Object.values(data).reduce((acc, item) => acc || item === 'Error', false)
  },

  async post(url, data) {
    if (this.checkForErrorField(data)) throw new Error('Example error')
    return data
  },

  async patch(url, data) {
    if (this.checkForErrorField(data)) throw new Error('Example error')
    return data
  },

  async put(url, data) {
    if (this.checkForErrorField(data)) throw new Error('Example error')
    return data
  },

  async delete(url, entityId) {
    const entityName = url.substring(0, url.lastIndexOf('/'))
    return this[entityName][entityId - 1]
  }
}

export default fakeAPi
