import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import Users from '../components/Users/Users'
import UserProfile from '../components/UserProfile/UserProfile'
import Tasks from '../components/Tasks/Tasks'
import { PageType } from '../utils/constants'

export default [
  {
    path: '/profile',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person,
    component: UserProfile,
    type: PageType.GENERAL
  },
  {
    path: '/tasks',
    sidebarName: 'tasks',
    navbarName: 'Tasks',
    icon: Dashboard,
    component: Tasks,
    type: PageType.ENTITY
  },
  {
    path: '/users',
    sidebarName: 'Users List',
    navbarName: 'Users List',
    icon: 'content_paste',
    component: Users,
    type: PageType.ENTITY
  },
  { redirect: true, path: '/', to: '/tasks', navbarName: 'Tasks' }
]
