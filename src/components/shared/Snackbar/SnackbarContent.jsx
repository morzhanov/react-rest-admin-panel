import React from 'react'
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Snack from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
// @material-ui/icons
import Close from '@material-ui/icons/Close'
// core components
import snackbarContentStyle from '../../../assets/jss/material-dashboard-react/components/snackbarContentStyle'

const SnackbarContent = ({ classes, message, color, close, icon, ...rest }) => {
  let action = []
  const messageClasses = classNames({
    [classes.iconMessage]: icon !== undefined
  })
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
      >
        <Close className={classes.close} />
      </IconButton>
    ]
  }
  return (
    <Snack
      message={
        <div>
          {icon !== undefined ? <rest.icon className={classes.icon} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      classes={{
        root: `${classes.root} ${classes[color]}`,
        message: classes.message
      }}
      action={action}
    />
  )
}

export default withStyles(snackbarContentStyle)(SnackbarContent)
