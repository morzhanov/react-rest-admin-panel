import React from 'react'
import './HeaderLinks.styl'
import { withRouter, Link } from 'react-router-dom'
import { logOut } from '../../../utils/helpers'

const performLogOut = () => {
  logOut()
  window.location.reload()
}

const HeaderLinks = ({ user }) =>
  user ? (
    <div className="header-links">
      <span>
        WELCOME <strong>{user.name.toUpperCase()}.</strong>
      </span>
      <Link className="header-links__change-password" to="/admin/password_change">
        CHANGE PASSWORD{' '}
      </Link>
      <button type="button" onClick={performLogOut}>
        / LOG OUT
      </button>
    </div>
  ) : null

export default withRouter(HeaderLinks)
