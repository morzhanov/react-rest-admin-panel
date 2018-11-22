import React from 'react'
import './HeaderLogo.styl'
import { withRouter } from 'react-router-dom'
import { dashboardRoutes } from '../../../../router/routes'

const HeaderLogo = ({ logo, logoText, history }) => (
  <div className="sidebar__logo">
    <button
      type="button"
      onClick={() => history.push(dashboardRoutes.home.path)}
      className="sidebar__logo-link"
    >
      <div className="sidebar__logo-image">
        <img src={logo} alt="logo" className="logo" />
      </div>
      {logoText}
    </button>
  </div>
)

export default withRouter(HeaderLogo)
