import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
// core components
import footerStyle from '../../../assets/jss/material-dashboard-react/components/footerStyle'

const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    <div className={classes.container}>
      <div className={classes.left}>
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <a href="#home" className={classes.block}>
              Home
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="#company" className={classes.block}>
              Company
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="#portfolio" className={classes.block}>
              Portfolio
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="#blog" className={classes.block}>
              Blog
            </a>
          </ListItem>
        </List>
      </div>
      <p className={classes.right}>
        <span>
          &copy; {1900 + new Date().getYear()}{' '}
          <a href="https://www.creative-tim.com" className={classes.a}>
            Creative Tim
          </a>
          , made with love for a better web
        </span>
      </p>
    </div>
  </footer>
)

export default withStyles(footerStyle)(Footer)
