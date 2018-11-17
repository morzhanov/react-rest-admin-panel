import React from 'react'
import { observer } from 'mobx-react'
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

  const sortItem = !sort
    ? null
    : sort.direction === undefined
    ? '*'
    : sort.direction
    ? '+'
    : '-'

  return (
    <TableCell type="button" onClick={onClick}>
      <span>{name}</span>
      {sort && <span>{sortItem}</span>}
    </TableCell>
  )
}

export default observer(TableHeadItem)
