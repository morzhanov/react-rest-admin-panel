import React from 'react'
import Modal from 'react-modal'
import Card from '../../Card/Card'

const style = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

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

  render() {
    const { title, desc, okButton, okCancel } = this.props
    const { isOpen } = this.state
    return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={this.onAfterOpen}
        onRequestClose={this.onRequestClose}
        style={style}
        contentLabel="Example Modal"
      >
        <Card>
          <h2 className="modal__title">{title}</h2>
          <p className="modal__desc">{desc}</p>
          <button type="button" onClick={this.onRequestClose} className="modal__close">
            close
          </button>
          <div className="modal__buttons">
            <button type="button">{okButton || 'Ok'}</button>
            <button type="button">{okCancel || 'Cancel'}</button>
          </div>
        </Card>
      </Modal>
    )
  }
}

export default PromptModal
