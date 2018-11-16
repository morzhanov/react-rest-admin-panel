import React from 'react'
import './Card.styl'

const Base = ({ baseClassName, className, children, ...rest }) => (
  <div className={`${baseClassName} ${className}`} {...rest}>
    {children}
  </div>
)

export const Card = props => <Base baseClassName="card" {...props} />

export const CardBody = props => <Base baseClassName="card__body" {...props} />

export const CardHeader = props => <Base baseClassName="card__header" {...props} />

export const CardFooter = props => <Base baseClassName="card__footer" {...props} />
