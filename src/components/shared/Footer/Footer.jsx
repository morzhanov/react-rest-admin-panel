import React from 'react'
import './Footer.styl'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__left">
        <List className="footer__list">
          <ListItem className="footer_inline-block">
            <a href="/" className="footer_block">
              Example link
            </a>
          </ListItem>
        </List>
      </div>
      <p className="footer__right">
        <span>
          &copy; {1900 + new Date().getYear()}{' '}
          <a href="/" className="footer__copy">
            React rest admin panel
          </a>
        </span>
      </p>
    </div>
  </footer>
)

export default Footer
