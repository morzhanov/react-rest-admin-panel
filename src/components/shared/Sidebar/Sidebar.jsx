import React from 'react'
import classNames from 'classnames'
import { NavLink, withRouter } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
import HeaderLinks from '../Header/HeaderLinks'
import sidebarStyle from '../../../assets/jss/material-dashboard-react/components/sidebarStyle'

// TODO: refactor all

const Sidebar = ({
  classes,
  color,
  logo,
  logoText,
  routes,
  handleDrawerToggle,
  open,
  location: { pathname }
}) => {
  const activeRoute = routeName => pathname.indexOf(routeName) > -1

  const links = (
    <div>
      {!!Object.keys(routes.custom).length && (
        <>
          <List className={classes.list}>
            {Object.values(routes.custom).map(prop => {
              if (prop.redirect) return null
              let activePro = ' '
              let listItemClasses
              if (prop.path === '/upgrade-to-pro') {
                activePro = `${classes.activePro} `
                listItemClasses = classNames({
                  [` ${classes[color]}`]: true
                })
              } else {
                listItemClasses = classNames({
                  [` ${classes[color]}`]: activeRoute(prop.path)
                })
              }
              const whiteFontClasses = classNames({
                [` ${classes.whiteFont}`]: activeRoute(prop.path)
              })
              return (
                <NavLink
                  exact
                  to={prop.path}
                  className={activePro + classes.item}
                  activeClassName="active"
                  key={prop.path}
                >
                  <ListItem button className={classes.itemLink + listItemClasses}>
                    <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                      {typeof prop.icon === 'string' ? (
                        <Icon>{prop.icon}</Icon>
                      ) : (
                        <prop.icon />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={prop.sidebarName}
                      className={classes.itemText + whiteFontClasses}
                      disableTypography
                    />
                  </ListItem>
                </NavLink>
              )
            })}
          </List>
          <div className={classes.logo}>
            <a href="/" className={classes.logoLink}>
              Entities management
            </a>
          </div>
        </>
      )}
      <List className={classes.list}>
        {Object.values(routes.entities).map(prop => {
          if (prop.redirect) return null
          let activePro = ' '
          let listItemClasses
          if (prop.path === '/upgrade-to-pro') {
            activePro = `${classes.activePro} `
            listItemClasses = classNames({
              [` ${classes[color]}`]: true
            })
          } else {
            listItemClasses = classNames({
              [` ${classes[color]}`]: activeRoute(prop.path)
            })
          }
          const whiteFontClasses = classNames({
            [` ${classes.whiteFont}`]: activeRoute(prop.path)
          })
          return (
            <NavLink
              exact
              to={prop.path}
              className={activePro + classes.item}
              activeClassName="active"
              key={prop.path}
            >
              <ListItem button className={classes.itemLink + listItemClasses}>
                <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                  {typeof prop.icon === 'string' ? (
                    <Icon>{prop.icon}</Icon>
                  ) : (
                    <prop.icon />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={prop.sidebarName}
                  className={classes.itemText + whiteFontClasses}
                  disableTypography
                />
              </ListItem>
            </NavLink>
          )
        })}
      </List>
    </div>
  )
  const headerLogo = (
    <div className={classes.logo}>
      <a href="/" className={classes.logoLink}>
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  )
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
        >
          {headerLogo}
          <div className={classes.sidebarWrapper}>
            <HeaderLinks />
            {links}
          </div>
          <div className={classes.background} style={{ backgroundColor: '#444' }} />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {headerLogo}
          <div className={classes.sidebarWrapper}>{links}</div>
          <div className={classes.background} style={{ backgroundColor: '#444' }} />
        </Drawer>
      </Hidden>
    </div>
  )
}

export default withRouter(withStyles(sidebarStyle)(Sidebar))
