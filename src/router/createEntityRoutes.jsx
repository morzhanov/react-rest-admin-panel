import React from 'react'
import { inject, observer } from 'mobx-react'
import EntityPage from '../components/Dashboard/Entity/EntityPage/EntityPage'
import EntityItemPage from '../components/Dashboard/Entity/EntityItemPage/EntityItemPage'
import { capitalize } from '../utils/helpers'

const renderEntityComponent = item =>
  inject(`${item.name}Store`)(
    observer(props => (
      <EntityPage
        store={props[`${item.name}Store`]}
        title={`${capitalize(item.name)}`}
        subtitle={`${capitalize(item.name)} entity`}
      />
    ))
  )

const renderEntityItemComponent = item =>
  inject(`${item.name}Store`)(
    observer(props => (
      <EntityItemPage
        fields={item.fields}
        entity={item}
        store={props[`${item.name}Store`]}
        title={`${capitalize(item.name)}`}
        subtitle={`${capitalize(item.name)} entity`}
      />
    ))
  )

const createEntityRoutes = items => {
  const res = {}
  items.forEach(item => {
    res[item.name] = {
      path: `/admin/${item.name}/`,
      sidebarName: `${capitalize(item.name)}s`,
      navbarName: `${capitalize(item.name)}s`,
      icon: item.icon,
      component: renderEntityComponent(item),
      exact: true,
      children: {
        update: {
          path: `/admin/${item.name}/:id`,
          component: renderEntityItemComponent(item),
          exact: true
        },
        add: {
          path: `/admin/${item.name}/add`,
          component: renderEntityItemComponent(item),
          exact: true
        }
      }
    }
  })
  return res
}

export default createEntityRoutes
