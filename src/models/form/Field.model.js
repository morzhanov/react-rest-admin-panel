import { types } from 'mobx-state-tree'
import { PureField } from './PureField.model'
import { FieldValidation } from './FieldValidation.model'
import { FileFieldModel } from './FileField.model'

export const FieldModel = types.compose(
  PureField,
  FieldValidation,
  FileFieldModel
)
