import React from 'react'
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Snack from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
// @material-ui/icons
import Close from '@material-ui/icons/Close'
// core components
import snackbarContentStyle from '../../../assets/jss/material-dashboard-react/components/snackbarContentStyle'

const Snackbar = ({
  classes,
  message,
  color,
  close,
  icon,
  place,
  open,
  closeNotification,
  ...rest
}) => {
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
        onClick={closeNotification}
      >
        <Close className={classes.close} />
      </IconButton>
    ]
  }
  return (
    <Snack
      anchorOrigin={{
        vertical: place.indexOf('t') === -1 ? 'bottom' : 'top',
        horizontal:
          place.indexOf('l') !== -1
            ? 'left'
            : place.indexOf('c') !== -1
            ? 'center'
            : 'right'
      }}
      open={open}
      message={
        <div>
          {icon !== undefined ? <rest.icon className={classes.icon} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      action={action}
      ContentProps={{
        classes: {
          root: `${classes.root} ${classes[color]}`,
          message: classes.message
        }
      }}
    />
  )
}

export default withStyles(snackbarContentStyle)(Snackbar)
