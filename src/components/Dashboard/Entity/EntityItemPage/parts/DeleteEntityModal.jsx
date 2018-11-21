import React from 'react'
import PromptModal from '../../../../shared/modals/PromptModal/PromptModal'

const DeleteEntityModal = React.forwardRef((props, ref) => (
  <PromptModal
    ref={ref}
    title={'Do you really want to remove this element ?' || props.title}
    okButton={'Delete' || props.okButton}
    okClassName={'danger' || props.okClassName}
    cancelClassName={props.cancelClassName}
    onOk={props.onOk}
    onCancel={props.onCancel}
  />
))

export default DeleteEntityModal
