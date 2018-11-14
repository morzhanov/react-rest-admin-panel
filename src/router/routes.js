import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import Password from '@material-ui/icons/'
import Users from '../components/Users/Users'
import Auth from '../components/Auth/Auth'
import DashboardPage from '../components/Dashboard/Dashboard'
import ChangePassword from '../components/ChangePassword/ChangePassword'
import Tasks from '../components/Tasks/Tasks'

export default {
  admin: {
    path: '/admin',
    sidebarName: 'Dashboard',
    navbarName: 'Dashboard',
    component: DashboardPage,
    children: {
      changePassword: {
        path: '/admin/password_change',
        component: ChangePassword
      },
      custom: {},
      entities: {
        tasks: {
          path: '/admin/tasks',
          sidebarName: 'tasks',
          navbarName: 'Tasks',
          icon: Dashboard,
          component: Tasks
        },
        users: {
          path: '/admin/users',
          sidebarName: 'Users List',
          navbarName: 'Users List',
          icon: Person,
          component: Users
        }
      }
    }
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
