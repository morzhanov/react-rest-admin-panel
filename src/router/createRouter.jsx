import React from 'react'
import { Route, Redirect, Switch } from 'react-router'

const renderRoute = ({ path, to, redirect, component, exact }) =>
  redirect ? (
    <Redirect from={path} to={to} key={path} />
  ) : (
    <Route exact={exact} path={path} component={component} key={path} />
  )

const renderRoutes = parent =>
  Object.keys(parent).reduce(
    (acc, item) =>
      !parent[item].path
        ? [...acc, ...renderRoutes(parent[item])]
        : parent[item].children
        ? [...acc, renderRoute(parent[item]), ...renderRoutes(parent[item].children)]
        : [...acc, renderRoute(parent[item])],
    []
  )

export default routes => () => <Switch>{renderRoutes(routes)}</Switch>
