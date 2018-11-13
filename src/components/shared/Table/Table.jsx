import React from 'react'
import { observer } from 'mobx-react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import NoData from '../noData/NoData'

const Table = (
  cols,
  data,
  isPending,
  firstCustomRow,
  noDataClassName,
  rowLinks,
  emptyDataMessage,
  withButton
) => (
  <div>
    <TableHead cols={cols} />
    <TableBody
      withButton={withButton}
      rowLinks={rowLinks}
      rows={data}
      cols={cols}
      firstCustomRow={firstCustomRow}
    />
    {!isPending && !data.length && (
      <NoData
        message={emptyDataMessage || `No data`}
        classes={noDataClassName}
      />
    )}
  </div>
)

Table.defaultProps = {
  data: [],
  className: 'table'
}

export default observer(Table)
