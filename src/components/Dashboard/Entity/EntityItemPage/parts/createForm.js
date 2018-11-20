import MobxReactForm from 'mobx-react-form'
import validatorjs from 'validatorjs'

const plugins = { dvr: validatorjs }

const getFieldType = ({ type, rules }) => {
  switch (true) {
    case rules && rules.includes('number'):
      return 'number'
    case rules && rules.includes('email'):
      return 'email'
    case rules && rules.includes('password'):
      return 'password'
    case rules && rules.includes('phone'):
      return 'tel'
    case rules && rules.includes('date'):
      return 'date'
    case rules && rules.includes('time'):
      return 'time'
    case rules && rules.includes('url'):
      return 'url'
    case type === 'boolean':
      return 'checkbox'
    default:
      return 'text'
  }
}

const createFieldsConfig = ({ fields, data }) =>
  fields
    .map(field => ({
      name: field.name,
      label: field.name,
      placeholder: field.name,
      type: getFieldType(field),
      rules: field.rules,
      extra: field.options,
      value: data[field.name]
    }))
    .filter(e => e.name !== 'id')

const createForm = ({ onSubmit, onError, fields, data }) => {
  const fieldsConfig = createFieldsConfig({ fields, data })

  const hooks = {
    onSuccess(form) {
      // get field values
      console.log('Form Values!', form.values())
      onSubmit()
    },
    onError(form) {
      // get all form errors
      console.log('All form errors', form.errors())
      onError()
    }
  }

  return new MobxReactForm({ fields: fieldsConfig }, { plugins, hooks })
}

export default createForm
