import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router'
import routes from './routes'

const router = ({ history }) => (
  <Router history={history}>
    <Switch>
      {routes.map(({ path, to, redirect, component }) => {
        if (redirect) {
          return <Redirect from={path} to={to} key={path} />
        }
        return <Route path={path} component={component} key={path} />
      })}
    </Switch>
  </Router>
)

export default router
