import 'perfect-scrollbar/css/perfect-scrollbar.css'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Provider } from 'mobx-react'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import logo from '../../assets/img/reactlogo.png'
import image from '../../assets/img/sidebar-2.jpg'
import dashboardStyle from '../../assets/jss/material-dashboard-react/layouts/dashboardStyle'
import AppRouter from '../../router/router'
import routes from '../../router/routes'
import createStores from '../../stores/createStore'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'
import Sidebar from '../shared/Sidebar/Sidebar'

const history = createBrowserHistory()
const stores = createStores(history)

class App extends React.Component {
  state = {
    mobileOpen: false
  }

  mainPanel = React.createRef()

  componentDidMount() {
    window.addEventListener('resize', this.resizeFunction)
  }

  componentDidUpdate(props) {
    const { mobileOpen } = this.state
    if (
      props.history &&
      props.history.location.pathname !== props.location.pathname
    ) {
      this.mainPanel.scrollTop = 0
      if (mobileOpen) {
        // eslint-disable-next-line
        this.setState(state => ({ ...state, mobileOpen: false }))
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFunction)
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ ...state, mobileOpen: !state.mobileOpen }))
  }

  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false })
    }
  }

  render() {
    const { classes, ...rest } = this.props
    const { mobileOpen } = this.state
    return (
      <Provider {...stores}>
        <Router history={history}>
          <div className={classes.wrapper}>
            <Sidebar
              routes={routes}
              logoText="Admin dashboard"
              logo={logo}
              image={image}
              handleDrawerToggle={this.handleDrawerToggle}
              open={mobileOpen}
              color="blue"
              location={history.location}
              {...rest}
            />
            <div className={classes.mainPanel} ref={this.mainPanel}>
              <Header
                location={history.location}
                routes={routes}
                handleDrawerToggle={this.handleDrawerToggle}
                {...rest}
              />
              <div className={classes.content}>
                <AppRouter history={history} />
              </div>
              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default withStyles(dashboardStyle)(App)
