import { types } from 'mobx-state-tree'
import RootStore from './RootStore'
import RouterStore from './RouterStore'
import { capitalize } from '../utils/helpers'
import AdminModel from '../models/AdminModel'
import entities from '../entities'
import EntityModel from '../models/EntityModel'
import TableModel from '../models/table/TableModel'
import EntityStore from './EntityStore'

const createEntityModel = ({ fields }) => {
  const schema = {}
  fields.forEach(field => {
    switch (field.type) {
      case 'number':
        schema[field.name] = types.optional(types.number, 0)
        break
      case 'boolean':
        schema[field.name] = types.optional(types.boolean, false)
        break
      default:
        schema[field.name] = types.optional(types.string, '')
        break
    }
  })
  return types.compose(
    types.model(schema),
    EntityModel
  )
}

const createTableModel = entity => {
  const cols = entity.fields.map(({ title, name, actions }) => {
    const res = {
      title: title || name,
      name
    }
    res.actions = { head: { sort: { name } } }
    if (actions && actions.head) {
      res.actions.head = { ...res.actions.head, ...actions.head }
    }
    if (actions && actions.body) {
      res.actions.body = actions.body
    }
    return res
  })

  return TableModel.create({
    filters: entity.filters,
    pagination: entity.pagination,
    cols
  })
}

const createEntityStore = entity => {
  const { url, filtersUrl, name } = entity

  const CurrentEntityModel = createEntityModel(entity)
  const entityTableModel = createTableModel(entity)

  const PendingStore = types.model(`${capitalize(name)}Store`, {
    data: types.array(CurrentEntityModel),
    single: types.maybe(CurrentEntityModel),
    url,
    filtersUrl,
    table: TableModel
  })

  const ComposedStore = types
    .compose(
      PendingStore,
      EntityStore
    )
    .named(`${capitalize(name)}EntityStore`)

  return ComposedStore.create({ table: entityTableModel })
}

const createStore = history => {
  let user
  const localStorageUser = localStorage.getItem('user')
  if (localStorageUser) {
    user = AdminModel.create(JSON.parse(localStorageUser))
  }
  const rootStore = RootStore.create({ user }, { user: AdminModel })
  const router = new RouterStore(history)

  const resultStore = {
    rootStore,
    router
  }

  entities.forEach(entity => {
    resultStore[`${entity.name}Store`] = createEntityStore(entity)
  })

  return resultStore
}

export default createStore
