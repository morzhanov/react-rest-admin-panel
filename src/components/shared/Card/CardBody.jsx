import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

// core components
import cardBodyStyle from '../../../assets/jss/material-dashboard-react/components/cardBodyStyle'

const CardBody = ({
  classes,
  className,
  children,
  plain,
  profile,
  ...rest
}) => {
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  })
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  )
}

export default withStyles(cardBodyStyle)(CardBody)
