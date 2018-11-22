// TODO: move entity page creation logic in separate file
import React from 'react'
import { inject, observer } from 'mobx-react'
import Auth from '../components/Auth/Auth'
import DashboardPage from '../components/Dashboard/Dashboard'
import Home from '../components/Dashboard/Home/Home'
import ChangePassword from '../components/Dashboard/ChangePassword/ChangePassword'
import EntityPage from '../components/Dashboard/Entity/EntityPage/EntityPage'
import EntityItemPage from '../components/Dashboard/Entity/EntityItemPage/EntityItemPage'
import { capitalize } from '../utils/helpers'
import entities from '../entities'
import guards from './routerGuards'

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

const getEntitiesRoutes = items => {
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

export const dashboardRoutes = {
  index: {
    exact: true,
    redirect: true,
    path: '/admin',
    to: '/admin/home'
  },
  changePassword: {
    exact: true,
    path: '/admin/password-change',
    component: ChangePassword
  },
  home: {
    exact: true,
    path: '/admin/home',
    component: Home
  },
  entities: getEntitiesRoutes(entities)
}

export default {
  admin: {
    path: '/admin',
    sidebarName: 'Dashboard',
    navbarName: 'Dashboard',
    component: DashboardPage,
    guardFunction: guards.mustBeAuthorized,
    redirectPath: '/auth'
  },
  auth: {
    path: '/auth',
    sidebarName: 'Auth',
    navbarName: 'Auth',
    component: Auth,
    guardFunction: guards.mustBeUnauthorized,
    redirectPath: '/admin'
  },
  notFound: {
    redirect: true,
    path: '*',
    to: '/admin/'
  }
}
