import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Input, FormControlLabel } from '@material-ui/core'
import routes from '../../router/routes'
import AuthHeader from './parts/AuthHeader'
import AuthWrapper from './parts/AuthWrapper'
import ChangeTypeLink from './parts/ChangeTypeLink'
import AuthForm from './parts/AuthForm'
import logger from '../../utils/logger'
import { saveTokens } from '../../utils/helpers'

const AUTH_TYPE_LOGIN = 0
const AUTH_TYPE_REGISTER = 1

@inject('router')
@observer
class Auth extends React.Component {
  state = {
    email: '',
    password: ''
  }

  componentDidMount() {
    const { location } = this.props
    this.setState(state => ({
      ...state,
      type: location.pathname.indexOf('login') >= 0 ? AUTH_TYPE_LOGIN : AUTH_TYPE_REGISTER
    }))
  }

  onAuthorized = ({ login }) => {
    const { router } = this.props
    saveTokens(login)
    router.push(routes.home)
  }

  onAuthorizationError = error => logger.log(error)

  handleEmailChange = e => this.setState({ email: e.target.value })

  handlePwdChange = e => this.setState({ password: e.target.value })

  performAuth = (email, pwd) => {
    // TODO: login
  }

  render() {
    const { email, password, type } = this.state
    return (
      <AuthWrapper>
        <>
          <AuthHeader>
            <h1>Auth</h1>
          </AuthHeader>
          <AuthForm>
            <FormControlLabel htmlFor="email">Email</FormControlLabel>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={this.handleEmailChange}
              placeholder="Enter email*"
            />
            <FormControlLabel htmlFor="password">Password</FormControlLabel>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={this.handlePwdChange}
              placeholder="Enter password*"
            />
            <Button
              style={{
                marginTop: 24,
                background: '#4877bf',
                height: 40,
                color: '#fff'
              }}
              onClick={this.performAuth(email, password)}
            >
              Sign {type === AUTH_TYPE_LOGIN ? ' In' : ' Up'}
            </Button>
            <ChangeTypeLink
              href={type === AUTH_TYPE_LOGIN ? routes.auth.register : routes.auth.login}
            >
              Go to Sign{type === AUTH_TYPE_LOGIN ? 'Up' : ' In'}
            </ChangeTypeLink>
          </AuthForm>
        </>
      </AuthWrapper>
    )
  }
}

export default Auth
