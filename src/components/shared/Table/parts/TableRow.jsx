import React from 'react'
import MuiTableRow from '@material-ui/core/TableRow'
import TableBodyItem from './TableBodyItem'

const TableRow = ({
  row,
  cols,
  i,
  link,
  router,
  customBodyElements,
  deleteEntityModal
}) => {
  const onClick = () => !!link && router.push(link)
  return (
    <MuiTableRow type="button" onClick={onClick}>
      {cols.map(item => (
        <TableBodyItem
          deleteEntityModal={deleteEntityModal}
          customBodyElements={customBodyElements}
          key={item.name + i}
          item={item}
          row={row}
        />
      ))}
    </MuiTableRow>
  )
}

export default TableRow
