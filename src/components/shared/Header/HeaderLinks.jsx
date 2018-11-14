import React from 'react'
import styled from 'styled-components'
import { withRouter, Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import { logOut } from '../../../utils/helpers'

import headerLinksStyle from '../../../assets/jss/material-dashboard-react/components/headerLinksStyle'

const Wrapper = styled.div`
  font-size: 12px;
`

const LogOutButton = styled.button`
  border: none;
  font-size: 12px;
  background: none;
  cursor: pointer;
`

const performLogOut = () => {
  logOut()
  window.location.reload()
}

const HeaderLinks = ({ user }) =>
  user ? (
    <Wrapper>
      WELCOME <strong>{user.name.toUpperCase()}.</strong>
      <Link to="/admin/password_change">CHANGE PASSWORD</Link> /
      <LogOutButton type="button" onClick={performLogOut}>
        LOG OUT
      </LogOutButton>
    </Wrapper>
  ) : null

export default withRouter(withStyles(headerLinksStyle)(HeaderLinks))
