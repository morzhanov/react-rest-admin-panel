import TableModel from '../../../../models/table/TableModel'

export default onChangeListener => {
  const pagination = { pageSize: 20, pageNumber: 1 }

  const filters = [
    {
      name: 'type',
      value: ''
    }
  ]

  const sort = {
    name: 'id'
  }

  const cols = [
    {
      title: 'Id',
      name: 'id',
      actions: {
        head: {
          sort: {
            name: 'id'
          }
        }
      }
    },
    {
      title: 'Name',
      name: 'name',
      actions: {
        head: {
          sort: {
            name: 'name'
          }
        }
      }
    },
    {
      title: 'Email',
      name: 'email',
      actions: {
        head: {
          sort: {
            name: 'email'
          }
        }
        // body: {
        //   custom: {
        //     Component: ({ data, param }) => (
        //       <div className="table-row-column">
        //         <div className={`status-label status-${param}`}>
        //           <span>{data}</span>
        //         </div>
        //       </div>
        //     ),
        //   },
        // },
      }
    },
    {
      title: 'Type',
      name: 'type',
      actions: {}
    }
  ]

  const config = TableModel.create({
    pagination,
    filters,
    sort,
    cols
  })

  config.setOnChangeListener(onChangeListener)

  return config
}
