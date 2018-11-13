import { types, destroy } from 'mobx-state-tree'
import { FormModel } from './Form.model'
import { FieldsGroupModel } from './FieldsGroup.model'

export const DynamicFormModel = types.compose(
  FormModel,
  types
    .model('DynamicForm', {
      fields: types.optional(types.array(FieldsGroupModel), []),
      initField: types.frozen()
    })
    .views(self => ({
      get isValid() {
        return !self.fields.some(item => !item.isValid)
      },
      get data() {
        let data = []
        self.fields.forEach(field => {
          if (self.type === 'post' || field.value) data = [...data, field.data]
        })
        return data
      }
    }))
    .actions(self => {
      const addField = () => {
        self.fields = [...self.fields, self.initField]
      }

      const removeField = group => {
        destroy(group)
      }

      return {
        addField,
        removeField
      }
    })
)
