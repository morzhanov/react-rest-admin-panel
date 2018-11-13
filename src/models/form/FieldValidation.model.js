import { getRoot, types } from 'mobx-state-tree'
import formValidator from './formValidator'

export const FieldValidation = types
  .model('FieldValidationModel', {
    validators: types.optional(types.array(types.string), []),
    serverErrorsArray: types.optional(types.array(types.string), [])
  })
  .views(self => ({
    get serverErrors() {
      return self.serverErrorsArray.length ? self.serverErrorsArray.join(' ') : ''
    },
    get isValid() {
      return !self.clientErrors.length
    },
    get clientErrors() {
      return self.validators
        .map(validator => {
          const v = validator.split(':')
          const rule = v[0]
          const params = v[1] && v[1].split(',')

          if (!formValidator[rule]) {
            throw new Error(
              `The rule "${rule}" doesn't exist. Fix the name or add to formValidator.js`
            )
          }

          return formValidator[rule].apply(self, params)(self)
        })
        .filter(message => message !== null)
    }
  }))
  .actions(self => {
    const setServerErrors = errors => {
      self.serverErrorsArray = errors
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
      setServerErrors,
      clearFieldErrors,
      clearFormErrors
    }
  })
