import React from 'react'
import { observer } from 'mobx-react'
import { MenuItem, Select, InputLabel, Input } from '@material-ui/core'
import './Filter.styl'

const Filter = ({ filter: { name, value, options }, onChange }) => (
  <div className="filter">
    <InputLabel htmlFor="filter__input">{name}</InputLabel>
    <Select
      value={value}
      onChange={({ target }) => onChange(name, target.value)}
      input={<Input name="filter" id="filter__input" />}
    >
      {options.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  </div>
)

export default observer(Filter)
