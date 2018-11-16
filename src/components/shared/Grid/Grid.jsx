import React from 'react'
import './Grid.styl'
import MuiGrid from '@material-ui/core/Grid'

const Grid = ({ classes, children, ...rest }) => (
  <MuiGrid container {...rest} className="grid">
    {children}
  </MuiGrid>
)

export default Grid
