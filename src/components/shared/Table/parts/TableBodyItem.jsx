import React from 'react'
import TableCell from '@material-ui/core/TableCell'

const TableBodyItem = ({
  item: {
    name,
    actions: {
      body: { custom }
    }
  },
  row
}) => (
  <TableCell>
    {custom && custom.Component ? (
      <custom.Component data={`${row[name]}`} />
    ) : (
      `${row[name]}`
    )}
  </TableCell>
)

export default TableBodyItem
