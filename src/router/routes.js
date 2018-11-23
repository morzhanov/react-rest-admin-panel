import Auth from '../components/Auth/Auth'
import DashboardPage from '../components/Dashboard/Dashboard'
import Home from '../components/Dashboard/Home/Home'
import ChangePassword from '../components/Dashboard/ChangePassword/ChangePassword'
import entities from '../entities'
import guards from './routerGuards'
import createEntityRoutes from './createEntityRoutes'

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
  entities: createEntityRoutes(entities)
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
