import React from 'react'
// connect your entities here
import user from './user'
import task from './task'

// INFO: provide your entities here
const entities = [user, task]

entities.forEach(entity => {
  entity.fields.unshift({
    name: 'id',
    type: 'number',
    actions: {
      body: {
        custom: ({ value, history, className }) => (
          <button type="button" onClick={() => history.push(value)} className={className}>
            {value}
          </button>
        ),
        className: 'table__item-link'
      }
    }
  })
})

export default entities
