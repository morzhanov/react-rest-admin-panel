import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import Users from '../components/Users/Users'
import Auth from '../components/Auth/Auth'
import UserProfile from '../components/UserProfile/UserProfile'
import Tasks from '../components/Tasks/Tasks'
import { PageType } from '../utils/constants'

export default {
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
      component: Auth
    }
  },
  sidebar: {
    profile: {
      path: '/profile',
      sidebarName: 'User Profile',
      navbarName: 'Profile',
      icon: Person,
      component: UserProfile,
      type: PageType.GENERAL
    },
    tasks: {
      path: '/tasks',
      sidebarName: 'tasks',
      navbarName: 'Tasks',
      icon: Dashboard,
      component: Tasks,
      type: PageType.ENTITY
    },
    users: {
      path: '/users',
      sidebarName: 'Users List',
      navbarName: 'Users List',
      icon: 'content_paste',
      component: Users,
      type: PageType.ENTITY
    }
  }
}
