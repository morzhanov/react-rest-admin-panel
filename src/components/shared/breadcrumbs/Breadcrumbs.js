import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const propTypes = {
  router: PropTypes.object,
}

const Breadcrumbs = (props) => {
  const breadcrumbs = props.router.routes
    .map((route) => {
      if ('getBreadcrumbData' in route.component) {
        const breadcrumb = route.component.getBreadcrumbData()

        return (
          <li key={`breadcrumb-item-${breadcrumb.link}`}>
            <Link to={breadcrumb.link}>{breadcrumb.name}</Link>
          </li>
        )
      }

      return null
    })
    .filter((breadcrumb) => breadcrumb !== null)

  if (!breadcrumbs.length) {
    return null
  }

  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="column-12">
          <nav>
            <ul className="inline-menu">{breadcrumbs}</ul>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumbs
Breadcrumbs.propTypes = propTypes
