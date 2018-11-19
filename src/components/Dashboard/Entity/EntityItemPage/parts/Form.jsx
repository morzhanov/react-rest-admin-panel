import React from 'react'
import './Form.styl'
import { filter } from 'lodash'
import { observer } from 'mobx-react'
import MobxReactForm from 'mobx-react-form'
import validatorjs from 'validatorjs'

const plugins = { dvr: validatorjs }

// const getFieldElement = type => {
//   switch (type) {
//     case 'boolean':
//       return props => <input {...props} type="checkox" />
//     default:
//       return props => <input {...props} type="text" />
//   }
// }

// const createFieldsConfig = model => {
//   const item = model.create({ id: 0 })

//   const fields = filter(
//     Object.keys(item).map(key => ({ name: key, type: typeof item[key] })),
//     e => e.name !== 'id'
//   )

//   const res = fields.map(field => ({
//     name: field.name,
//     label: field.name,
//     placeholder: field.name,
//     element: getFieldElement(field.type)
//     // rules: ''
//   }))
//   console.log(res)
//   return res
// }

const Form = ({ onSubmit, onError }) => {
  // const fields = createFieldsConfig(model)
  const fields = [
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Insert Email',
      rules: 'required|email|string|between:5,25'
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: 'Insert Password',
      rules: 'required|string|between:5,25'
    },
    {
      name: 'passwordConfirm',
      label: 'Password Confirmation',
      placeholder: 'Confirm Password',
      rules: 'required|string|same:password'
    }
  ]

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

  const form = new MobxReactForm({ fields }, { plugins, hooks })

  return (
    <form onSubmit={form.onSubmit}>
      {fields.map(field => (
        <div key={field.name}>
          <label htmlFor={form.$(field.name).id}>{form.$(field.name).label}</label>
          <field.type {...form.$(field.name).bind()} />
          <p>{form.$(field.name).error}</p>
        </div>
      ))}

      <button type="submit" onClick={form.onSubmit}>
        Submit
      </button>

      <p>{form.error}</p>
    </form>
  )
}

export default observer(Form)
