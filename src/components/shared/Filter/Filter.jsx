import React from 'react'
import { observer } from 'mobx-react'
import { MenuItem, Select, InputLabel, FormControl } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import './Filter.styl'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  selectMenu: {
    color: '#ddd'
  }
})

const Filter = ({ classes, filter: { name, value, options }, onChange }) => (
  <form className={`filter ${classes.root} ${value ? 'active' : ''}`} autoComplete="off">
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-simple">{name}</InputLabel>
      <Select
        disableUnderline
        className="filter__select"
        value={value}
        onChange={({ target }) => onChange(name, target.value)}
        inputProps={{
          name: 'age',
          id: 'age-simple'
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </form>
)

export default withStyles(styles)(observer(Filter))
