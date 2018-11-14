import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import routes from './routes'

Object.keys(routes).forEach(item =>
  Object.keys(routes[item]).forEach(
    item2 => (
      console.log('child', item2),
      console.log('parent', item),
      console.log('parent[child]', routes[item][item2])
    )
  )
)

const renderRoute = ({ path, to, redirect, component }) => {
  if (redirect) {
    return <Redirect from={path} to={to} key={path} />
  }
  return <Route exact path={path} component={component} key={path} />
}

const renderRoutes = parent =>
  Object.keys(parent).map(item =>
    parent[item].path ? renderRoute(parent[item]) : renderRoutes(parent[item])
  )

const AppRouter = () => <Switch>{renderRoutes(routes)}</Switch>

export default AppRouter
