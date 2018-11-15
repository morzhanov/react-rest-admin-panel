import React from 'react'
import styled from 'styled-components'
import { withRouter, Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import { logOut } from '../../../utils/helpers'
import headerLinksStyle from '../../../assets/jss/material-dashboard-react/components/headerLinksStyle'

const Wrapper = styled.div`
  color: #000;
  font-size: 12px;
  font-weight: 300;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  span {
    margin-right: 8px;
  }
  a.change-password {
    color: #000;
  }
  a,
  button {
    &:hover {
      color: #33f;
    }
  }
`

const LogOutButton = styled.button`
  border: none;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  padding: 0;
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
      <span>
        WELCOME <strong>{user.name.toUpperCase()}.</strong>
      </span>
      <Link className="change-password" to="/admin/password_change">
        CHANGE PASSWORD{' '}
      </Link>
      <LogOutButton type="button" onClick={performLogOut}>
        / LOG OUT
      </LogOutButton>
    </Wrapper>
  ) : null

export default withRouter(withStyles(headerLinksStyle)(HeaderLinks))
