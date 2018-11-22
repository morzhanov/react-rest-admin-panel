import React from 'react'
import './Auth.styl'
import { inject, observer } from 'mobx-react'
import { Button, Input, FormLabel } from '@material-ui/core'
import routes from '../../router/routes'
import logger from '../../utils/logger'

@inject('router', 'rootStore')
@observer
class Auth extends React.Component {
  state = {
    email: '',
    password: ''
  }

  onAuthorizationError = error => logger.log(error)

  handleEmailChange = e => this.setState({ email: e.target.value })

  handlePwdChange = e => this.setState({ password: e.target.value })

  performAuth = async () => {
    const { email, password } = this.state
    const { history, rootStore } = this.props
    if (await rootStore.login({ email, password })) {
      history.push(routes.admin.path)
    }
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="auth">
        <>
          <header>
            <h1>Sign In</h1>
          </header>
          <form>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={this.handleEmailChange}
              placeholder="Enter email*"
            />
            <FormLabel htmlFor="password">Password</FormLabel>
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
              className="auth__submit-button"
              onClick={this.performAuth}
            >
              Sign In
            </Button>
          </form>
        </>
      </div>
    )
  }
}

export default Auth
