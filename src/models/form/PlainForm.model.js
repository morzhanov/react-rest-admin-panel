import { types } from 'mobx-state-tree'
import { FormModel } from './Form.model'
import { FieldsGroupModel } from './FieldsGroup.model'

export const PlainFormModel = types.compose(
  FormModel,
  FieldsGroupModel
)
