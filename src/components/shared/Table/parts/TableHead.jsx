import React from 'react'
import MuiTableHead from '@material-ui/core/TableHead'
import MuiTableRow from '@material-ui/core/TableRow'
import TableHeadItem from './TableHeadItem'

const TableHead = ({ cols }) => (
  <MuiTableHead>
    <MuiTableRow>
      {cols.map(item => (
        <TableHeadItem key={item.name} item={item} />
      ))}
    </MuiTableRow>
  </MuiTableHead>
)

export default TableHead
