import React from 'react'
import TableCell from '@material-ui/core/TableCell'

const TableHeadItem = ({
  item: {
    name,
    actions: {
      head: { sort }
    }
  }
}) => {
  const hasSorting = sort && sort.tableOrdering
  const onClick = () => hasSorting && sort.onChangeSortDirection()

  return (
    <TableCell type="button" onClick={onClick}>
      <span>{name}</span>
    </TableCell>
  )
}

export default TableHeadItem
