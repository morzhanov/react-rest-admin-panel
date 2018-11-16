import React from 'react'
import './Sidebar.styl'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import HeaderLinks from '../Header/HeaderLinks'
import HeaderLogo from './parts/HeaderLogo'
import SidebarList from './parts/SidebarList'

const BaseDrawer = ({
  mobile,
  logo,
  logoText,
  routes,
  handleDrawerToggle,
  open,
  location: { pathname },
  rootStore: { user }
}) => {
  const activeRoute = routeName => pathname.indexOf(routeName) > -1
  return (
    <Drawer
      variant={mobile ? 'temporary' : 'permanent'}
      anchor="left"
      open={mobile ? open : true}
      classes={{
        paper: 'sidebar sidebar__papper'
      }}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
    >
      <HeaderLogo logo={logo} logoText={logoText} />
      <div className="sidebar__wrapper">
        {mobile && <HeaderLinks user={user} />}
        <SidebarList routes={routes.entities} activeRoute={activeRoute} />
      </div>
      <div className="sidebar__background" style={{ backgroundColor: '#444' }} />
    </Drawer>
  )
}

const Sidebar = props => (
  <div className="sidebar">
    <Hidden mdUp implementation="css">
      <BaseDrawer mobile {...props} />
    </Hidden>
    <Hidden className="sidebar" smDown implementation="css">
      <BaseDrawer {...props} />
    </Hidden>
  </div>
)

export default inject('rootStore')(observer(withRouter(Sidebar)))
