import React from 'react'
import './Form.styl'
import { observer } from 'mobx-react'
import { Input, Checkbox } from '@material-ui/core'
import Dropdown from '../../../../shared/Dropdown/Dropdown'

const FieldInput = observer(({ form, name, extra, type }) => (
  <>
    {extra ? (
      <Dropdown
        onChange={value => form.$(name).set(value)}
        data={{ name, value: form.$(name).value, options: form.$(name).extra }}
      />
    ) : type === 'checkbox' ? (
      <Checkbox {...form.$(name).bind()} value={`${form.$(name).value}`} />
    ) : (
      <Input {...form.$(name).bind()} />
    )}
  </>
))

const Form = ({ form }) => (
  <form onSubmit={form.onSubmit}>
    {[...form.fields.values()].map(({ name, extra, type }) => (
      <div key={name}>
        <label htmlFor={form.$(name).id}>{form.$(name).label}</label>
        <FieldInput form={form} name={name} extra={extra} type={type} />
        <p>{form.$(name).error}</p>
      </div>
    ))}
    <p>{form.error}</p>
  </form>
)

export default observer(Form)
