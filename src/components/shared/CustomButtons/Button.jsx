import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// material-ui components
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'

import buttonStyle from '../../../assets/jss/material-dashboard-react/components/buttonStyle'

const RegularButton = ({
  classes,
  color,
  round,
  children,
  disabled,
  simple,
  size,
  block,
  link,
  justIcon,
  className,
  muiClasses,
  ...rest
}) => {
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  })
  return (
    <Button {...rest} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>
  )
}

export default withStyles(buttonStyle)(RegularButton)
