import { types } from 'mobx-state-tree'

const Entity = types.model('Entity', {
  id: types.integer
})

export default Entity
