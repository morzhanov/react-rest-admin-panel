import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import headerLinksStyle from '../../../assets/jss/material-dashboard-react/components/headerLinksStyle'

const HeaderLinks = ({ user }) =>
  user ? (
    <div>
      Hello <strong>{user.name}</strong>
    </div>
  ) : null

export default withStyles(headerLinksStyle)(HeaderLinks)
