import * as React from 'react'
import './components/shared/styles/main.styl'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Modal from 'react-modal'
import App from './components/App/App'

Modal.setAppElement('#root')

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NextApp = require('./components/App/App').default

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
