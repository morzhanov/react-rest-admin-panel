import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

const ArrowUp = styled.button`
  active: ${({ active }) => active};
`

const ArrowDown = styled.button`
  active: ${({ active }) => active};
`

const Sorting = ({ sort: { direction } }) => (
  <div>
    <ArrowUp active={direction === 'up'} type="button" />
    <ArrowDown active={direction === 'down'} type="button" />
  </div>
)

export default observer(Sorting)
