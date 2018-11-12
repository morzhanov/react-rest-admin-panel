import React from 'react'
import classNames from 'classnames'
import { observer, inject } from 'mobx-react'
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
// @material-ui/icons
import Menu from '@material-ui/icons/Menu'
// core components
import Button from '../CustomButtons/Button'
import HeaderLinks from './HeaderLinks'

import headerStyle from '../../../assets/jss/material-dashboard-react/components/headerStyle'

const Header = ({
  handleDrawerToggle,
  routes,
  classes,
  color,
  location: { pathname },
  uiStore
}) => {
  const makeBrand = () => {
    let name
    routes.map(prop => {
      if (prop.path === pathname) {
        name = prop.navbarName
      }
      return null
    })
    return name
  }

  const appBarClasses = classNames({
    [` ${classes[color]}`]: color
  })
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <Button color="transparent" href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks user={uiStore.user} />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default inject('uiStore')(observer(withStyles(headerStyle)(Header)))
