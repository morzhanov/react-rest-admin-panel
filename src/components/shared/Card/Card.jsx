import React from 'react'
import './Card.styl'

const Card = ({ className = 'card', children, ...rest }) => (
  <div className={className} {...rest}>
    {children}
  </div>
)

export default Card
