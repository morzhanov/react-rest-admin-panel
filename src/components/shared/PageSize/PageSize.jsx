import React from 'react'
import { observer } from 'mobx-react'
import { MenuItem, Select } from '@material-ui/core'
import './PageSize.styl'

const sizes = [10, 20, 40, 60, 80, 100]

const PageSize = ({ value, onChange }) => (
  <div className={`page-size ${value ? 'active' : ''}`}>
    <span>Rows per page</span>
    <Select
      disableUnderline
      className="page-size__select"
      value={value}
      onChange={({ target }) => onChange(target.value)}
      inputProps={{
        name: 'age',
        id: 'age-simple'
      }}
    >
      {sizes.map(number => (
        <MenuItem key={number} value={number}>
          {number}
        </MenuItem>
      ))}
    </Select>
  </div>
)

export default observer(PageSize)
