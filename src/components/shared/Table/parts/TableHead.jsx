import React from 'react'
import styled from 'styled-components'
import TableHeadItem from './TableHeadItem'

const ColumnHeaderWrapper = styled.div`
  height: 58px;
  line-height: 58px;
  font-size: 0;
  margin-bottom: 8px;
  padding-left: 16px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
`

const TableHead = ({ cols }) => (
  <ColumnHeaderWrapper>
    {cols.map(item => (
      <TableHeadItem key={item.name} item={item} />
    ))}
  </ColumnHeaderWrapper>
)

export default TableHead
