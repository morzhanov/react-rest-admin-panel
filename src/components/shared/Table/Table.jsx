import React from 'react'
import { observer } from 'mobx-react'
import MuiTable from '@material-ui/core/Table'
import TableHead from './parts/TableHead'
import TableBody from './parts/TableBody'
import NoData from './parts/NoData'
import Loading from './parts/Loading'

const Table = ({
  cols,
  data,
  isPending,
  rowLinks,
  withButton,
  customHeadElements,
  customBodyElements,
  deleteEntityModal
}) => (
  <>
    <MuiTable className="table">
      <TableHead customHeadElements={customHeadElements} cols={cols} />
      <TableBody
        customBodyElements={customBodyElements}
        deleteEntityModal={deleteEntityModal}
        withButton={withButton}
        rowLinks={rowLinks}
        rows={data}
        cols={cols}
      />
    </MuiTable>
    {!data.length ? isPending ? <Loading /> : <NoData /> : null}
  </>
)

Table.defaultProps = {
  data: [],
  className: 'table'
}

export default observer(Table)
