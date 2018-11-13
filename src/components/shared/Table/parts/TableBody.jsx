import React from 'react'
import { observer, inject } from 'mobx-react'
import TableRow from './TableRow'

const TableBody = ({
  rows = [],
  cols,
  firstCustomRow,
  rowLinks,
  withButton,
  router
}) => (
  <div>
    {firstCustomRow && <div>{firstCustomRow}</div>}
    {rows.map((row, i) => (
      <TableRow
        router={router}
        withButton={withButton}
        link={rowLinks && rowLinks[i]}
        key={row.key}
        row={row}
        cols={cols}
      />
    ))}
  </div>
)

export default inject('router')(observer(TableBody))
