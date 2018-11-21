import React from 'react'
import './PromptModal.styl'
import classnames from 'classnames'
import Modal from 'react-modal'
import Close from '@material-ui/icons/Close'
import Card from '../../Card/Card'

class PromptModal extends React.Component {
  state = {
    isOpen: false
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  onRequestClose = () => {
    this.setState({ isOpen: false })
  }

  handleOkClicked = () => {
    const { onOk } = this.props
    if (onOk) onOk()
    this.setState({ isOpen: false })
  }

  handleCancelClicked = () => {
    const { onCancel } = this.props
    if (onCancel) onCancel()
    this.setState({ isOpen: false })
  }

  render() {
    const { title, desc, okButton, okCancel, okClassName, cancelClassName } = this.props
    const { isOpen } = this.state
    return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={this.onAfterOpen}
        onRequestClose={this.onRequestClose}
        contentLabel="Example Modal"
        className={classnames('modal__content', { 'modal__content--nondesc': !desc })}
        overlayClassName="modal__overlay"
      >
        <Card>
          <h2 className="modal__title">{title}</h2>
          {desc && <p className="modal__desc">{desc}</p>}
          <Close onClick={this.onRequestClose} className="modal__close">
            close
          </Close>
          <div className="modal__buttons">
            <button onClick={this.handleOkClicked} className={okClassName} type="button">
              {okButton || 'Ok'}
            </button>
            <button
              onClick={this.handleCancelClicked}
              className={cancelClassName}
              type="button"
            >
              {okCancel || 'Cancel'}
            </button>
          </div>
        </Card>
      </Modal>
    )
  }
}

export default PromptModal
