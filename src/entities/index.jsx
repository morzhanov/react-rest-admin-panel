import React from 'react'
// connect your entities here
import user from './user'
// import task from './task'

// INFO: provide your entities here
const entities = [user]

entities.forEach(entity => {
  entity.fields.unshift({
    name: 'id',
    type: 'number',
    actions: {
      body: {
        custom: ({ value, history, ...rest }) => (
          <button
            type="button"
            onClick={() => history.push(`${entity.url}/${value}`)}
            {...rest}
          >
            {value}
          </button>
        ),
        className: 'table__item-link'
      }
    }
  })
})

export default entities
