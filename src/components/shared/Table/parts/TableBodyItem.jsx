import React from 'react'
import './TableBodyItem.styl'
import { find } from 'lodash'
import { withRouter } from 'react-router-dom'
import TableCell from '@material-ui/core/TableCell'

const TableBodyItem = ({
  item: {
    name,
    actions: {
      body: { custom, className }
    }
  },
  row,
  history,
  customBodyElements,
  deleteEntityModal
}) => {
  const Action = custom ? find(customBodyElements, { name }).custom : null

  return (
    <TableCell>
      {Action ? (
        <Action
          className={className}
          history={history}
          name={name}
          id={row.id}
          value={`${row[name]}`}
          deleteEntityModal={deleteEntityModal}
        />
      ) : (
        `${row[name]}`
      )}
    </TableCell>
  )
}

export default withRouter(TableBodyItem)
