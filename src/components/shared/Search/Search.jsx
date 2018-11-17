import React from 'react'
import './Search.styl'
import { Input } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

const Search = ({ value, onChange }) => (
  <div className="search">
    <Input
      disableUnderline
      placeholder="Search"
      type="text"
      value={value}
      onChange={onChange}
    />
    <SearchIcon />
  </div>
)

export default Search
