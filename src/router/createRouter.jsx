import React from 'react'
import { Route, Redirect, Switch } from 'react-router'

const renderRoute = ({ path, to, redirect, component, exact }) => {
  if (redirect) {
    return <Redirect from={path} to={to} key={path} />
  }
  return <Route exact={exact} path={path} component={component} key={path} />
}

const renderRoutes = parent =>
  Object.keys(parent).map(item =>
    parent[item].path ? renderRoute(parent[item]) : renderRoutes(parent[item])
  )

export default routes => () => <Switch>{renderRoutes(routes)}</Switch>
