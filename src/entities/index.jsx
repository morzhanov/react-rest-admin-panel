import React from 'react'
// connect your entities here
import user from './user'
import Entity from '../models/EntityModel'
// import task from './task'

// INFO: provide your entities here
const entities = [user]

entities.forEach(entity => {
  entity.fields.unshift({
    name: 'id',
    type: 'number',
    actions: {
      body: {
        custom: ({ value, history }) => (
          <button type="button" onClick={() => history.push(`${Entity.url}/${value}`)}>
            {value}
          </button>
        ),
        className: 'table__item-link'
      }
    }
  })
})

export default entities
