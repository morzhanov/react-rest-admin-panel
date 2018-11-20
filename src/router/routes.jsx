// TODO: move entity page creation logic in separate file
import React from 'react'
import { inject, observer } from 'mobx-react'
import Auth from '../components/Auth/Auth'
import DashboardPage from '../components/Dashboard/Dashboard'
import ChangePassword from '../components/Dashboard/ChangePassword/ChangePassword'
import EntityPage from '../components/Dashboard/Entity/EntityPage/EntityPage'
import EntityItemPage from '../components/Dashboard/Entity/EntityItemPage/EntityItemPage'
import { capitalize } from '../utils/helpers'
import entities from '../entities'

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
      path: `/admin/${item.name}`,
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
  changePassword: {
    path: '/admin/password_change',
    component: ChangePassword
  },
  entities: getEntitiesRoutes(entities)
}

export default {
  admin: {
    path: '/admin',
    sidebarName: 'Dashboard',
    navbarName: 'Dashboard',
    component: DashboardPage
  },
  auth: {
    login: {
      path: '/login',
      sidebarName: 'Login',
      navbarName: 'Login',
      component: Auth
    },
    signup: {
      path: '/signup',
      sidebarName: 'Sign Up',
      navbarName: 'Sign Up',
      component: Auth,
      exact: true
    }
  },
  notFound: {
    redirect: true,
    path: '*',
    to: '/admin'
  }
}
