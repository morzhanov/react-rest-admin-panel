import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import Auth from '../components/Auth/Auth'
import DashboardPage from '../components/Dashboard/Dashboard'
import ChangePassword from '../components/Dashboard/ChangePassword/ChangePassword'
import User from '../components/Dashboard/entities/User/User'
import Tasks from '../components/Dashboard/entities/Tasks/Tasks'
import SingleUser from '../components/Dashboard/entities/User/SingleUser'

export const dashboardRoutes = {
  changePassword: {
    path: '/admin/password_change',
    component: ChangePassword
  },
  custom: {},
  // entities
  entities: {
    // tasks: {
    //   path: '/admin/tasks',
    //   sidebarName: 'tasks',
    //   navbarName: 'Tasks',
    //   icon: Dashboard,
    //   component: Tasks
    // },
    // TODO: generalize entitties
    user: {
      path: '/admin/user',
      sidebarName: 'Users List',
      navbarName: 'Users List',
      icon: Person,
      component: User,
      exact: true,
      children: {
        item: {
          path: '/admin/user/:id',
          component: SingleUser,
          exact: true
        }
      }
    }
  }
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
