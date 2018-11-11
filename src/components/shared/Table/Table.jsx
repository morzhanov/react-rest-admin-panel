import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
// core components
import tableStyle from 'assets/jss/material-dashboard-react/components/tableStyle'

const CustomTable = ({ classes, tableHead, tableData, tableHeaderColor }) => (
  <div className={classes.tableResponsive}>
    <Table className={classes.table}>
      {tableHead !== undefined ? (
        <TableHead className={classes[`${tableHeaderColor}TableHeader`]}>
          <TableRow>
            {tableHead.map(prop => (
              <TableCell
                className={`${classes.tableCell} ${classes.tableHeadCell}`}
                key={prop}
              >
                {prop}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      ) : null}
      <TableBody>
        {tableData.map(prop => (
          <TableRow key={prop}>
            {prop.map(item => (
              <TableCell className={classes.tableCell} key={item}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
)

export default withStyles(tableStyle)(CustomTable)
