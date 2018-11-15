import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Menu from '@material-ui/icons/Menu'
import HeaderLinks from './HeaderLinks'
import headerStyle from '../../../assets/jss/material-dashboard-react/components/headerStyle'

const Burger = styled(Hidden)`
  position: fixed;
  top: 14px;
  left: 14px;
`

const Header = ({ handleDrawerToggle, classes, color, rootStore }) => (
  <AppBar
    className={
      classes.appBar +
      classNames({
        [` ${classes[color]}`]: color
      })
    }
  >
    <Toolbar className={classes.container}>
      <div className={classes.flex} />
      <Hidden smDown implementation="css">
        <HeaderLinks user={rootStore.user} />
      </Hidden>
      <Burger mdUp implementation="css">
        <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
          <Menu />
        </IconButton>
      </Burger>
    </Toolbar>
  </AppBar>
)

export default inject('rootStore')(observer(withStyles(headerStyle)(Header)))
