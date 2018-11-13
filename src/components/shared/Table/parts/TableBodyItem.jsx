import React from 'react'
import styled from 'styled-components'

const TableRowColumn = styled.div`
  height: 100%;
  font-size: 16px;
  line-height: 56px;
  display: inline-block;
  padding-right: 15px;
`

const TableBodyItem = ({
  item: {
    getValue,
    getParam,
    actions: {
      body: { custom }
    }
  },
  row
}) => {
  const value = getValue(row)
  const param = getParam(row)

  return custom.TD ? (
    <custom.TD data={value} param={param} />
  ) : value ? (
    <TableRowColumn>
      {custom.Component ? (
        <custom.Component data={value} param={param} />
      ) : (
        value
      )}
    </TableRowColumn>
  ) : null
}

export default TableBodyItem
