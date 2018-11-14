import React from 'react'
import { Button, Input, FormLabel } from '@material-ui/core'
import { inject, observer } from 'mobx-react'
import { withState, compose } from 'recompose'
import Header from './parts/Header'
import Wrapper from './parts/Wrapper'
import Form from './parts/Form'

const ChangePassword = ({
  rootStore: {
    user: { changePassword }
  },
  oldPassword,
  setOldPassword,
  repeatPassword,
  setRepeatPassword,
  newPassword,
  setNewPassword
}) => (
  <Wrapper>
    <Header>
      <h1>Change password</h1>
    </Header>
    <Form>
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
        placeholder="Enter email*"
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
    </Form>
  </Wrapper>
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
