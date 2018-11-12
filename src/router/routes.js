import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import Users from '../components/Users/Users'
import UserProfile from '../components/UserProfile/UserProfile'
import Tasks from '../components/Tasks/Tasks'

export default [
  {
    path: '/tasks',
    sidebarName: 'tasks',
    navbarName: 'Tasks',
    icon: Dashboard,
    component: Tasks
  },
  {
    path: '/user',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person,
    component: UserProfile
  },
  {
    path: '/users',
    sidebarName: 'Users List',
    navbarName: 'Users List',
    icon: 'content_paste',
    component: Users
  },
  { redirect: true, path: '/', to: '/tasks', navbarName: 'Tasks' }
]
