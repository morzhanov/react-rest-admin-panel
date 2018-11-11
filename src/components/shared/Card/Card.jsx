import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

// core components
import cardStyle from '../../../assets/jss/material-dashboard-react/components/cardStyle'

const Card = ({
  classes,
  className,
  children,
  plain,
  profile,
  chart,
  ...rest
}) => {
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  })
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  )
}

export default withStyles(cardStyle)(Card)
