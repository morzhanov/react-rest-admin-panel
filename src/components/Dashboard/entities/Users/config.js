import { DataTable } from '../../../../models/list/DataTable.model'

const filters = {
  id: {
    name: 'id',
    value: ''
  },
  name: {
    name: 'name',
    value: ''
  },
  email: {
    name: 'email',
    value: ''
  }
}

const sort = {
  ordering: {
    name: 'ordering',
    value: '-created'
  }
}

const cols = [
  {
    name: 'Id',
    pathToValue: ['id'],
    pathToParam: ['id'],
    actions: {
      head: {
        sort: {
          name: 'id'
        }
      }
    }
  },
  {
    name: 'Name',
    pathToValue: ['name'],
    actions: {
      head: {
        sort: {
          name: 'name'
        }
      }
    }
  },
  {
    name: 'Email',
    pathToValue: ['email'],
    pathToParam: ['email'],
    actions: {
      head: {}
      // body: {
      //   custom: {
      //     TD: ({ data, param }) => (
      //       <div className="table-row-column">
      //         <div className={`status-label status-${param}`}>
      //           <span>{data}</span>
      //         </div>
      //       </div>
      //     ),
      //   },
      // },
    }
  }
]

const list = {
  pagination: { pageSize: 5 },
  filters,
  cols,
  sort,
  url: 'url',
  globalActions: {
    onSort: () => {}
  }
}
export const usersEntityConfig = DataTable.create(list)
