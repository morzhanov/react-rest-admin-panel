import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import typographyStyle from '../../../assets/jss/material-dashboard-react/components/typographyStyle'

const Primary = ({ classes, children }) => (
  <div className={`${classes.defaultFontStyle} ${classes.primaryText}`}>
    {children}
  </div>
)

export default withStyles(typographyStyle)(Primary)
