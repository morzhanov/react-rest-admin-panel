import React from 'react'
import { observer } from 'mobx-react'

// TODO: add icons
const Sorting = ({ sort: { direction } }) => (
  <div>
    <button active={direction === 'up'} type="button" />
    <button active={direction === 'down'} type="button" />
  </div>
)

export default observer(Sorting)
