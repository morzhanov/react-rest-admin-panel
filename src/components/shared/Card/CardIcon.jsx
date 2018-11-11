import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

// core components
import cardIconStyle from '../../../assets/jss/material-dashboard-react/components/cardIconStyle'

const CardIcon = ({ classes, className, children, color, ...rest }) => (
  <div
    className={classNames({
      [classes.cardIcon]: true,
      [classes[`${color}CardHeader`]]: color,
      [className]: className !== undefined
    })}
    {...rest}
  >
    {children}
  </div>
)

export default withStyles(cardIconStyle)(CardIcon)
