import isEmail from 'validator/lib/isEmail'
import { getParent } from 'mobx-state-tree'
import moment from 'moment'
import { errorMessages, helpers } from '../constants'

export default {
  required: () => ({ value }) =>
    value === undefined || value === null || !value.toString().trim().length
      ? errorMessages.required
      : null,

  isEmail: () => ({ value = '' }) => (!isEmail(value) ? errorMessages.isEmail : null),

  minStringLength: length => ({ value = '' }) =>
    value.length < length ? errorMessages.minLength(length) : null,

  maxStringLength: length => ({ value = '' }) =>
    value.length > length ? errorMessages.maxLength(length) : null,

  dob: () => props => {
    const date = moment(new Date(props.value), 'MM/DD/YYYY')
    const year = date.year()
    const MAX_YEAR = new Date().getFullYear()
    const MIN_YEAR = 1900
    const isValid = date.isValid() && year > MIN_YEAR && year < MAX_YEAR
    return isValid ? null : 'Birth date is not valid'
  },

  equalTo: (equalFieldName, depth = 2) => field => {
    const equalField = getParent(field, depth).fields.get(equalFieldName)
    return equalField.value !== field.value
      ? errorMessages.equalTo(equalField.label)
      : null
  },

  url: () => ({ value }) =>
    !value ? null : helpers.checkUrl(value) ? null : errorMessages.validUrl
}
