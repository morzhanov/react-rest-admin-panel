import React from 'react'
import './Footer.styl'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'

// TODO: change footer, remove redundant items, add required
const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__left">
        <List className="footer__list">
          <ListItem className="footer_inline-block">
            <a href="#home" className="footer_block">
              Home
            </a>
          </ListItem>
          <ListItem className="footer_inline-block">
            <a href="#company" className="footer_block">
              Company
            </a>
          </ListItem>
          <ListItem className="footer_inline-block">
            <a href="#portfolio" className="footer__block">
              Portfolio
            </a>
          </ListItem>
          <ListItem className="footer_inline-block">
            <a href="#blog" className="footer_block">
              Blog
            </a>
          </ListItem>
        </List>
      </div>
      <p className="footer__right">
        <span>
          &copy; {1900 + new Date().getYear()}{' '}
          <a href="https://www.creative-tim.com" className="footer__copy">
            Enter App name
          </a>
        </span>
      </p>
    </div>
  </footer>
)

export default Footer
