import { types } from 'mobx-state-tree'
// import ReactAlert from 'react-s-alert'

export const formTypes = {
  post: 'post',
  patch: 'patch',
  put: 'put'
}

export const FormModel = types
  .model('Form', {
    errors: types.optional(types.frozen(), {}),
    submitted: false,
    isPending: false,
    type: types.optional(types.enumeration(Object.values(formTypes)), formTypes.post)
  })
  .actions(self => {
    const onSubmit = () => {
      self.submitted = true
    }

    const onAsyncSubmit = request => {
      self.submitted = true

      if (self.isValid && !self.isPending) {
        self.setPendingStatus(true)

        request(self.data, self.setErrors)
          .then(response => {
            // TODO: handle response
            self.setPendingStatus(false)
          })
          .catch(error => {
            // TODO: handle error
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
        targetField && targetField.seterrors(errors[key])
      })
      const { non_field_errors: nonFieldErrors } = errors
      self.errors = { nonFieldErrors }
    }

    const clearErrors = () => {
      self.errors = {}
    }

    return {
      onSubmit,
      onAsyncSubmit,
      setErrors,
      clearErrors,
      setPendingStatus
    }
  })
