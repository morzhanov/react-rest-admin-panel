import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import typographyStyle from '../../../assets/jss/material-dashboard-react/components/typographyStyle'

const Quote = ({ classes, text, author }) => (
  <blockquote className={`${classes.defaultFontStyle} ${classes.quote}`}>
    <p className={classes.quoteText}>{text}</p>
    <small className={classes.quoteAuthor}>{author}</small>
  </blockquote>
)

export default withStyles(typographyStyle)(Quote)
