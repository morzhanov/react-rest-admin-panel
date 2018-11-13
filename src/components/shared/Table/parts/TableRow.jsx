import React from 'react'
import styled from 'styled-components'
import TableBodyItem from './TableBodyItem'

const ButtonRow = styled.button`
  padding-left: 16;
  border-radius: 8;
  cursor: default;
`

const TableRow = ({ row, cols, i, link, router }) => {
  const onClick = () => !!link && router.push(link)

  return (
    <ButtonRow type="button" onClick={onClick}>
      {cols.map(item => (
        <TableBodyItem key={item.name + i} item={item} row={row} />
      ))}
    </ButtonRow>
  )
}

export default TableRow
