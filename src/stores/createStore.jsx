import React from 'react'
import { types } from 'mobx-state-tree'
import { Edit, Delete } from '@material-ui/icons'
import RootStore from './RootStore'
import RouterStore from './RouterStore'
import { capitalize } from '../utils/helpers'
import AdminModel from '../models/AdminModel'
import entities from '../entities'
import EntityModel from '../models/EntityModel'
import TableModel from '../models/table/TableModel'
import EntityStore from './EntityStore'

export const createEntityModel = ({ fields, url }) => {
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
  schema.url = url
  return types.compose(
    types.model(schema),
    EntityModel
  )
}

const createTableModel = entity => {
  const customHeadElements = []
  const customBodyElements = []
  const cols = entity.fields.map(({ title, name, actions }) => {
    const res = {
      title: title || name,
      name
    }
    res.actions = { head: { sort: { name } } }
    if (actions && actions.head && actions.head.custom) {
      customHeadElements.push({ name, custom: actions.head.custom })
      res.actions.head = {
        ...res.actions.head,
        custom: true,
        className: actions.head.className
      }
    }
    if (actions && actions.body && actions.body.custom) {
      customBodyElements.push({ name, custom: actions.body.custom })
      res.actions.body = {
        custom: true,
        className: actions.body.className
      }
    }
    return res
  })

  // add edit and remove elements actions col
  cols.push({
    name: 'actions',
    title: 'Actions',
    actions: {
      head: {},
      body: {
        custom: true
      }
    }
  })

  customBodyElements.push({
    name: 'actions',
    custom: ({ id, history, deleteEntityModal }) => {
      const { pathname } = history.location
      const editPath = `${pathname}/${id}`
      return (
        <div className="table__actions">
          <Edit onClick={() => history.push(editPath)} />
          <Delete
            onClick={() => deleteEntityModal.current.openModal({ id, name: entity.name })}
          />
        </div>
      )
    }
  })

  const tableModel = TableModel.create({
    filters: entity.filters,
    pagination: entity.pagination,
    cols
  })

  customHeadElements.forEach(elem => tableModel.addCustomHeadElement(elem))
  customBodyElements.forEach(elem => tableModel.addCustomBodyElement(elem))

  return tableModel
}

const createEntityStore = entity => {
  const { url, filtersUrl, name } = entity

  const CurrentEntityModel = createEntityModel(entity)
  const entityTableModel = createTableModel(entity)

  const PendingStore = types.model(`${capitalize(name)}Store`, {
    data: types.array(CurrentEntityModel),
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
  let admin
  const localStorageUser = localStorage.getItem('admin')
  if (localStorageUser) {
    admin = AdminModel.create(JSON.parse(localStorageUser))
  }
  const rootStore = RootStore.create({ admin }, { admin: AdminModel })
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
