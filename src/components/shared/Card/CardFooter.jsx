import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

// core components
import cardFooterStyle from '../../../assets/jss/material-dashboard-react/components/cardFooterStyle'

const CardFooter = ({
  classes,
  className,
  children,
  plain,
  profile,
  stats,
  chart,
  ...rest
}) => {
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart,
    [className]: className !== undefined
  })
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  )
}

export default withStyles(cardFooterStyle)(CardFooter)
