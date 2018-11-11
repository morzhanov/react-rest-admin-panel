import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import typographyStyle from '../../../assets/jss/material-dashboard-react/components/typographyStyle'

const Danger = ({ classes, children }) => (
  <div className={`${classes.defaultFontStyle} ${classes.dangerText}`}>
    {children}
  </div>
)

export default withStyles(typographyStyle)(Danger)
