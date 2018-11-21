import React from 'react'
import PromptModal from '../../../../shared/modals/PromptModal/PromptModal'

const DeleteEntityModal = React.forwardRef((props, ref) => (
  <PromptModal
    ref={ref}
    message="Do you really want do remove this element ?"
    styles={
      {
        /* provide styles */
      }
    }
    okButton="Remove"
  />
))

export default DeleteEntityModal
