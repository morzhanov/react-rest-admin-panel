import React from 'react'
import { observer } from 'mobx-react'
import MuiTable from '@material-ui/core/Table'
import TableHead from './parts/TableHead'
import TableBody from './parts/TableBody'

const Table = ({ cols, data, isPending, firstCustomRow, rowLinks, withButton }) => (
  <MuiTable>
    <TableHead cols={cols} />
    <TableBody
      withButton={withButton}
      rowLinks={rowLinks}
      rows={data}
      cols={cols}
      firstCustomRow={firstCustomRow}
    />
    {!isPending && !data.length && <div>No data</div>}
  </MuiTable>
)

Table.defaultProps = {
  data: [],
  className: 'table'
}

export default observer(Table)
