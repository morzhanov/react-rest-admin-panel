import { getRoot, types } from 'mobx-state-tree'
import { FieldValidationModel } from './FieldValidationModel'

export const FieldModel = types
  .model('FieldModel', {
    name: types.string,
    initValue: types.frozen(),
    value: types.frozen(),
    icon: types.optional(types.string, ''),
    refName: types.optional(types.string, ''),
    label: types.optional(types.string, ''),
    disabled: types.optional(types.boolean, false),
    placeholder: types.optional(types.string, ''),
    isBlurred: false,
    isFilled: false
  })
  .views(self => ({
    get isPristine() {
      return self.initValue === self.value
    },
    get isDirty() {
      return self.initValue !== self.value
    },
    get submitted() {
      return getRoot(self).submitted
    },
    get nativeProps() {
      return {
        name: self.name,
        id: self.name,
        value: self.value,
        disabled: self.disabled,
        placeholder: self.placeholder,
        onChange: self.onChange,
        onBlur: self.onBlur
      }
    },
    get fieldStateProps() {
      return {
        label: self.label,
        isPristine: self.isPristine,
        isDirty: self.isDirty,
        isBlurred: self.isBlurred,
        isFilled: self.isFilled,
        submitted: self.submitted
      }
    }
  }))
  .actions(self => {
    const onChange = value => {
      self.clearFormErrors && self.clearFormErrors()
      self.clearFieldErrors && self.clearFieldErrors()
      self.value = value
    }
    const onBlur = () => {
      self.isBlurred = true
      self.isFilled = !!self.value
    }

    return {
      onChange,
      onBlur,
      afterCreate() {
        // life cycle hook. Run after creation the model
        self.initValue = self.value
        self.isFilled = self.isFilled || !!self.initValue
      }
    }
  })

export default types.compose(
  FieldModel,
  FieldValidationModel
)
