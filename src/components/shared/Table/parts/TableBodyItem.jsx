import React from 'react'
import TableCell from '@material-ui/core/TableCell'

const TableBodyItem = ({
  item: {
    getValue,
    getParam,
    actions: {
      body: { custom }
    }
  },
  row
}) => {
  const value = getValue(row)
  const param = getParam(row)

  return custom.TD ? (
    <custom.TD data={value} param={param} />
  ) : value ? (
    <TableCell>
      {custom.Component ? <custom.Component data={value} param={param} /> : value}
    </TableCell>
  ) : null
}

export default TableBodyItem
