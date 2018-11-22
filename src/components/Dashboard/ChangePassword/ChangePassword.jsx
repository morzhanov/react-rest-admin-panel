import React from 'react'
import './ChangePassword.styl'
import { Button, Input, FormLabel } from '@material-ui/core'
import { inject, observer } from 'mobx-react'
import { withState, compose } from 'recompose'

const ChangePassword = ({
  rootStore: {
    admin: { changePassword }
  },
  oldPassword,
  setOldPassword,
  repeatPassword,
  setRepeatPassword,
  newPassword,
  setNewPassword
}) => (
  <div className="change-password">
    <header>
      <h1>Change password</h1>
    </header>
    <form>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input
        type="password"
        id="oldPassword"
        value={oldPassword}
        onChange={setOldPassword}
        placeholder="Enter email*"
      />
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input
        type="password"
        id="repeatPassword"
        value={repeatPassword}
        onChange={setRepeatPassword}
        placeholder="Repeat password*"
      />
      <FormLabel htmlFor="password">Password</FormLabel>
      <Input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={setNewPassword}
        placeholder="Enter password*"
      />
      <Button
        style={{
          marginTop: 24,
          background: '#4877bf',
          height: 40,
          color: '#fff'
        }}
        onClick={() => changePassword(newPassword)}
      >
        Change password
      </Button>
    </form>
  </div>
)

export default inject('rootStore')(
  observer(
    compose(
      withState('oldPassword', 'setOldPassword', ''),
      withState('repeatPassword', 'setRepeatPassword', ''),
      withState('newPassword', 'setNewPassword', '')
    )(ChangePassword)
  )
)
