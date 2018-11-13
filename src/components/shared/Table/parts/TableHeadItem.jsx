import React from 'react'
import styled from 'styled-components'

const ColumnHeader = styled.button`
  display: inline-block;
  vertical-align: top;
  height: 100%;
  padding-right: 16px;
`

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

  return (
    <ColumnHeader type="button" onClick={onClick}>
      <span>{name}</span>
    </ColumnHeader>
  )
}

export default TableHeadItem
