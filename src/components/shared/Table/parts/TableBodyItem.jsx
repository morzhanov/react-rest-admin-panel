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
}) => {
  const value = row[name]
  return (
    <TableCell>
      {custom && custom.Component ? <custom.Component data={value} /> : value}
    </TableCell>
  )
}

export default TableBodyItem
