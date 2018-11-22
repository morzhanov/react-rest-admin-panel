import React from 'react'
import { Redirect, Switch } from 'react-router'
import GuardRoute from './GuardRoute'

const renderRoute = ({
  path,
  to,
  redirect,
  exact,
  children,
  guardFunction,
  redirectPath,
  ...rest
}) =>
  redirect ? (
    <Redirect exact={exact} from={path} to={to} key={path} />
  ) : (
    <GuardRoute
      key={path}
      exact={exact}
      path={path}
      guardFunction={guardFunction}
      redirectRoute={redirectPath}
      {...rest}
    />
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
