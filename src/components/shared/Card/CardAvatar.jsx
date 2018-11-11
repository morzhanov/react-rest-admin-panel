import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
// core components

import cardAvatarStyle from '../../../assets/jss/material-dashboard-react/components/cardAvatarStyle'

const CardAvatar = ({
  classes,
  children,
  className,
  plain,
  profile,
  ...rest
}) => {
  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [className]: className !== undefined
  })
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  )
}

export default withStyles(cardAvatarStyle)(CardAvatar)
