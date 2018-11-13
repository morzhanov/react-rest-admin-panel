import { types } from 'mobx-state-tree'
// import ReactAlert from 'react-s-alert'

export const formTypes = {
  post: 'post',
  patch: 'patch'
}

export const FormModel = types
  .model('Form', {
    serverErrors: types.optional(types.frozen(), {}),
    submitted: false,
    isPending: false,
    // type of form patch or post
    type: types.optional(types.enumeration(Object.values(formTypes)), formTypes.post)
  })
  .actions(self => {
    const onSubmit = () => {
      self.submitted = true
    }

    const onAsyncSubmit = request => {
      self.submitted = true

      if (self.isValid && !self.isPending) {
        if (!request || typeof request !== 'function') {
          throw new Error(
            'Property "request" is required and this property must be a function!',
            'Form.model.js'
          )
        }
        self.setPendingStatus(true)

        request(self.data, self.setErrors)
          .then(response => {
            if (response.detail) {
              // ReactAlert.success(response.detail, configs.alertConfig)
            }
            self.setPendingStatus(false)
          })
          .catch(error => {
            if (error.detail) {
              // ReactAlert.error(error.detail, configs.alertConfig)
            }
            self.setPendingStatus(false)
          })
      }
    }

    const setPendingStatus = bool => {
      self.isPending = bool
    }

    const setErrors = errors => {
      Object.keys(errors).forEach(key => {
        const targetField = self.fields.values().find(field => field.name === key)
        targetField && targetField.setServerErrors(errors[key])
      })
      const { non_field_errors: nonFieldErrors } = errors
      self.serverErrors = { nonFieldErrors }
    }

    const clearErrors = () => {
      self.serverErrors = {}
    }

    return {
      onSubmit,
      onAsyncSubmit,
      setErrors,
      clearErrors,
      setPendingStatus
    }
  })
