import React from 'react'
import './ChangePassword.styl'
import MobxReactForm from 'mobx-react-form'
import { Button, Input, FormLabel } from '@material-ui/core'
import { inject, observer } from 'mobx-react'
import validatorjs from 'validatorjs'
import logger from '../../../utils/logger'
import { dashboardRoutes } from '../../../router/routes'

@inject('router', 'rootStore')
@observer
class ChangePassword extends React.Component {
  constructor(props) {
    super(props)

    const plugins = { dvr: validatorjs }

    const hooks = {
      onSuccess: this.performPasswordChange,
      onError: this.onFormErrors
    }

    const fields = [
      {
        name: 'oldPassword',
        label: 'Old password',
        placeholder: 'Old password',
        rules: 'required'
      },
      {
        name: 'newPassword',
        label: 'New password',
        placeholder: 'New password',
        rules: 'required|same:repeatPassword'
      },
      {
        name: 'repeatPassword',
        label: 'Repeat password',
        placeholder: 'Repeat password',
        rules: 'required|same:newPassword'
      }
    ]

    this.form = new MobxReactForm({ fields }, { plugins, hooks })
  }

  onFormErrors = form => logger.log(form.errors())

  performPasswordChange = async form => {
    const {
      router: { history },
      rootStore: { admin }
    } = this.props
    const { newPassword } = form.values()
    await admin.changePassword(newPassword)
    history.push(dashboardRoutes.home.path)
  }

  render() {
    const { form } = this
    return (
      <div className="change-password">
        <header>
          <h1>Change password</h1>
        </header>
        <form>
          <FormLabel htmlFor="email">Old password</FormLabel>
          <Input {...form.$('oldPassword').bind()} />
          <p className="change-password__error-field">{form.$('oldPassword').error}</p>
          <FormLabel htmlFor="newPassword">New password</FormLabel>
          <Input {...form.$('newPassword').bind()} />
          <p className="change-password__error-field">{form.$('newPassword').error}</p>
          <FormLabel htmlFor="repeatPassword">Repeat password</FormLabel>
          <Input {...form.$('repeatPassword').bind()} />
          <p className="change-password__error-field">{form.$('repeatPassword').error}</p>
          <Button className="change-password__submit-button" onClick={form.onSubmit}>
            Change password
          </Button>
        </form>
      </div>
    )
  }
}

export default ChangePassword
