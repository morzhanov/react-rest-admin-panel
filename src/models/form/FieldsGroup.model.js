import { types } from 'mobx-state-tree'
import { FieldModel } from './Field.model'

export const FieldsGroupModel = types
  .model('FieldsGroup', {
    fields: types.optional(types.map(FieldModel), {})
  })
  .views(self => ({
    get isValid() {
      return !self.fields.values().some(item => !item.isValid)
    },
    get data() {
      const data = {}
      self.fields.forEach(field => {
        if (self.type === 'post' || field.value) data[field.name] = field.value
      })
      return data
    }
  }))
