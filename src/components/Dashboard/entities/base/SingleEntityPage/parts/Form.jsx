import React from 'react'
import './Form.styl'
import { observer } from 'mobx-react'
import MobxReactForm from 'mobx-react-form'
import validatorjs from 'validatorjs'

const plugins = { dvr: validatorjs }

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
    alert('Form is valid! Send the request here.')
    // get field values
    console.log('Form Values!', form.values())
  },
  onError(form) {
    alert('Form has errors!')
    // get all form errors
    console.log('All form errors', form.errors())
  }
}

const form = new MobxReactForm({ fields }, { plugins, hooks })

const UpdateEntityPage = () => (
  <form onSubmit={form.onSubmit}>
    {fields.map(field => (
      <div key={field.name}>
        <label htmlFor={form.$(field.name).id}>{form.$(field.name).label}</label>
        <input {...form.$(field.name).bind()} />
        <p>{form.$(field.name).error}</p>
      </div>
    ))}

    <button type="submit" onClick={form.onSubmit}>
      Submit
    </button>
    <button type="button" onClick={form.onClear}>
      Clear
    </button>
    <button type="button" onClick={form.onReset}>
      Reset
    </button>

    <p>{form.error}</p>
  </form>
)

export default observer(UpdateEntityPage)
