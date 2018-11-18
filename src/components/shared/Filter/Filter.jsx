import React from 'react'
import { observer } from 'mobx-react'
import Select from 'react-select'
import './Filter.styl'

const Filter = ({ filter: { name, value, options }, onChange }) => (
  <div className="filter">
    <Select
      placeholder={name}
      isClearable
      defaultValue={value}
      options={options.map(item => ({ label: item, value: item }))}
      onChange={e => onChange(name, e ? e.value : '')}
    />
  </div>
)

export default observer(Filter)
