import Person from '@material-ui/icons/Person'
import apiUrls from '../utils/apiUrls'

export default {
  name: 'user',

  // icon for dashboard item
  icon: Person,

  // You can provide api url to utils/apiUrl
  // or just copy string value here
  url: apiUrls.fake.users,

  filtersUrl: apiUrls.fake.usersFilters,

  // [optional] table pagination configuration
  pagination: { pageSize: 20, pageNumber: 1 },

  // [optional] table filters
  // you can pass filters options here
  // or provide filtersApiUrl to fetch them
  filters: [
    {
      name: 'type',
      value: ''
    }
  ],

  fields: [
    {
      name: 'id',
      type: 'number'
    },
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'email',
      type: 'string'
    },
    {
      name: 'type',
      type: 'string'
    },
    {
      name: 'isManager',
      type: 'boolean'
    }
  ]
}
