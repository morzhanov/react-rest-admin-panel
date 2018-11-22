import React from 'react'
import './Auth.styl'
import { inject, observer } from 'mobx-react'
import MobxReactForm from 'mobx-react-form'
import { Button, Input, FormLabel } from '@material-ui/core'
import validatorjs from 'validatorjs'
import routes from '../../router/routes'
import logger from '../../utils/logger'

@inject('router', 'rootStore')
@observer
class Auth extends React.Component {
  constructor(props) {
    super(props)

    const plugins = { dvr: validatorjs }

    const hooks = {
      onSuccess: this.performAuth,
      onError: this.onAuthorizationError
    }

    const fields = [
      {
        name: 'email',
        label: 'email',
        placeholder: 'email',
        rules: 'email|required'
      },
      {
        name: 'password',
        label: 'password',
        placeholder: 'password',
        rules: 'required'
      }
    ]

    this.form = new MobxReactForm({ fields }, { plugins, hooks })
  }

  onAuthorizationError = form => logger.log(form.errors())

  performAuth = async form => {
    const { history, rootStore } = this.props
    const { email, password } = form.values()
    if (await rootStore.login({ email, password })) {
      history.push(routes.admin.path)
    }
  }

  render() {
    const { form } = this
    return (
      <div className="auth">
        <header>
          <h1>Sign In</h1>
        </header>
        <form>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input {...form.$('email').bind()} />
          <p className="auth__error-field">{form.$('email').error}</p>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input {...form.$('password').bind()} />
          <p className="auth__error-field">{form.$('password').error}</p>
          <Button className="auth__submit-button" onClick={form.onSubmit}>
            Sign In
          </Button>
        </form>
      </div>
    )
  }
}

export default Auth
