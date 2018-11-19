import { getRoot, types } from 'mobx-state-tree'
import formValidator from '../../utils/formValidator'

export const FieldValidationModel = types
  .model('FieldValidationModel', {
    rules: types.optional(types.array(types.string), []),
    errors: types.optional(types.array(types.string), [])
  })
  .views(self => ({
    get serverErrors() {
      return self.serverErrorsArray.length ? self.serverErrorsArray.join(' ') : ''
    },
    get isValid() {
      return !self.clientErrors.length
    },
    get validationErrors() {
      return self.rule
        .map(rules => {
          const v = rules.split(':')
          const current = v[0]
          const params = v[1] && v[1].split(',')

          return formValidator[current].apply(self, params)(self)
        })
        .filter(message => message !== null)
    }
  }))
  .actions(self => {
    const setErrors = errors => {
      self.errors = errors
    }

    const clearFormErrors = () => {
      if (Object.keys(getRoot(self).serverErrors).length) {
        getRoot(self).clearErrors()
      }
    }

    const clearFieldErrors = () => {
      if (self.serverErrors) {
        self.serverErrorsArray = []
      }
    }
    return {
      setErrors,
      clearFieldErrors,
      clearFormErrors
    }
  })
