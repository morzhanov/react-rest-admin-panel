import React from 'react'

const HeaderLogo = ({ logo, logoText }) => (
  <div className="sidebar__logo">
    <a href="/" className="sidebar__logo-link">
      <div className="sidebar__logo-image">
        <img src={logo} alt="logo" className="logo" />
      </div>
      {logoText}
    </a>
  </div>
)

export default HeaderLogo
