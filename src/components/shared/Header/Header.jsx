import React from 'react'
import './Header.styl'
import { observer, inject } from 'mobx-react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Menu from '@material-ui/icons/Menu'
import HeaderLinks from './HeaderLinks'

const Header = ({ handleDrawerToggle, rootStore }) => (
  <AppBar className="app-bar">
    <Toolbar className="app-bar__container">
      <div className="app-bar__flex" />
      <Hidden smDown implementation="css">
        <HeaderLinks user={rootStore.admin} />
      </Hidden>
      <Hidden className="app-bar__burger" mdUp implementation="css">
        <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
          <Menu />
        </IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
)

export default inject('rootStore')(observer(Header))
