import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import routes from './routes'

const AppRouter = () => (
  <Switch>
    {routes.map(({ path, to, redirect, component }) => {
      if (redirect) {
        return <Redirect from={path} to={to} key={path} />
      }
      return <Route exact path={path} component={component} key={path} />
    })}
  </Switch>
)

export default AppRouter
