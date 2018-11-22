import React from 'react'
import { Route, Redirect } from 'react-router'

const GuardRoute = ({ component: Component, guardFunction, redirectRoute, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !guardFunction || guardFunction() ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirectRoute} />
      )
    }
  />
)

export default GuardRoute
