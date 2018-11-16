import React from 'react'
import classnames from 'classnames'
import { NavLink } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'

const SidebarList = ({ activeRoute, routes }) => (
  <div>
    <List className="sidebar__list">
      {Object.values(routes).map(prop => {
        if (prop.redirect) return null
        const listItemClasses = classnames({
          active: activeRoute(prop.path)
        })
        const whiteFontClasses = classnames({
          sidebar_white: activeRoute(prop.path)
        })
        return (
          <NavLink
            exact
            to={prop.path}
            className="sidebar__item"
            activeClassName="active"
            key={prop.path}
          >
            <ListItem button className={`sidebar__item-link${listItemClasses}`}>
              <ListItemIcon className={`sidebar__item-icon${whiteFontClasses}`}>
                {typeof prop.icon === 'string' ? <Icon>{prop.icon}</Icon> : <prop.icon />}
              </ListItemIcon>
              <ListItemText
                primary={prop.sidebarName}
                className={`sidebar__item-text${whiteFontClasses}`}
                disableTypography
              />
            </ListItem>
          </NavLink>
        )
      })}
    </List>
  </div>
)

export default SidebarList
