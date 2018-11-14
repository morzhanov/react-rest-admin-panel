import 'perfect-scrollbar/css/perfect-scrollbar.css'
import React from 'react'
import { Provider } from 'mobx-react'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import routes from '../../router/routes'
import createRouter from '../../router/createRouter'
import createStores from '../../stores/createStore'

const history = createBrowserHistory()
const stores = createStores(history)

const AppRouter = createRouter(routes)

const App = () => (
  <Provider {...stores}>
    <Router history={history}>
      <AppRouter />
    </Router>
  </Provider>
)

export default App
