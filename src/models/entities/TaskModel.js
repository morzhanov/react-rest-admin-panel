import { types } from 'mobx-state-tree'
import { helpers } from '../utils'

export const Task = types
  .model('Task', {
    id: types.identifier(),
    name: types.string,
    description: types.string,
    created: types.number,
    updated: types.number,
    status: types.string
  })
  .views(self => ({
    get createdDate() {
      return helpers.getFormattedDate(self.created)
    },
    get modifiedDate() {
      return helpers.getFormattedDate(self.modified)
    }
  }))
