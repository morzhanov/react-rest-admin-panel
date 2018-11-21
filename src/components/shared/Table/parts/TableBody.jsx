import React from 'react'
import { observer, inject } from 'mobx-react'
import MuiTableBody from '@material-ui/core/TableBody'
import TableRow from './TableRow'

const TableBody = ({
  rows = [],
  cols,
  firstCustomRow,
  rowLinks,
  withButton,
  router,
  customBodyElements,
  deleteEntityModal
}) => (
  <MuiTableBody>
    {firstCustomRow && <div>{firstCustomRow}</div>}
    {rows.map((row, i) => (
      <TableRow
        customBodyElements={customBodyElements}
        router={router}
        withButton={withButton}
        link={rowLinks && rowLinks[i]}
        key={row.id || i}
        row={row}
        cols={cols}
        deleteEntityModal={deleteEntityModal}
      />
    ))}
  </MuiTableBody>
)

export default inject('router')(observer(TableBody))
