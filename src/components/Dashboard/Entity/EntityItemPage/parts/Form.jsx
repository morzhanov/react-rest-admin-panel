import React from 'react'
import './Form.styl'
import { observer } from 'mobx-react'
import { Input, Checkbox } from '@material-ui/core'
import Dropdown from '../../../../shared/Dropdown/Dropdown'

const FieldInput = observer(({ form, name, extra, type }) => (
  <>
    {extra ? (
      <Dropdown
        placeholder={name}
        onChange={value => form.$(name).set(value)}
        data={{ name, value: form.$(name).value, options: form.$(name).extra }}
      />
    ) : type === 'checkbox' ? (
      <Checkbox
        color="default"
        className="entity-item__form-input-checkbox"
        {...form.$(name).bind()}
        value={`${form.$(name).value}`}
      />
    ) : (
      <Input className="entity-item__form-input" {...form.$(name).bind()} />
    )}
  </>
))

const Form = ({ form }) => (
  <form className="entity-item__form">
    {[...form.fields.values()].map(({ name, extra, type }) => (
      <div className="entity-item__form-row" key={name}>
        {/* eslint-disable-next-line */}
        <label htmlFor={form.$(name).id}>{`${form.$(name).label}:`}</label>
        <FieldInput form={form} name={name} extra={extra} type={type} />
        <p>{form.$(name).error}</p>
      </div>
    ))}
    <p>{form.error}</p>
  </form>
)

export default observer(Form)
