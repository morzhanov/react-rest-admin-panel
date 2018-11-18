import React from 'react'
import { observer } from 'mobx-react'
import './Search.styl'
import { Input } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

const Search = ({ value, onChange }) => (
  <div className={`search${value ? ' active' : ''}`}>
    <Input
      disableUnderline
      placeholder="Search"
      type="text"
      value={value}
      onChange={({ target }) => onChange(target.value)}
    />
    <SearchIcon />
  </div>
)

export default observer(Search)
