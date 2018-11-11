import 'perfect-scrollbar/css/perfect-scrollbar.css'
import dashboardStyle from 'assets/jss/material-dashboard-react/layouts/dashboardStyle'
import image from 'assets/img/sidebar-2.jpg'
import logo from 'assets/img/reactlogo.png'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Provider } from 'mobx-react'
import { createBrowserHistory } from 'history'
import Router from '../../router/router'
import routes from '../../router/routes'
import { createStores } from '../../stores/createStore'
import UserModel from '../../models/UserModel'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'
import Sidebar from '../shared/Sidebar/Sidebar'

const history = createBrowserHistory()
const defautlUser = UserModel.create({
  name: 'Default Name'
})
const stores = createStores(history, defautlUser)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false
    }
    this.resizeFunction = this.resizeFunction.bind(this)
    this.mainPanel = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeFunction)
  }

  componentDidUpdate(e) {
    const { mobileOpen } = this.state
    if (e.history.location.pathname !== e.location.pathname) {
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

  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false })
    }
  }

  render() {
    const { classes, ...rest } = this.props
    const { mobileOpen } = this.state
    return (
      <Provider {...stores}>
        <div className={classes.wrapper}>
          <Sidebar
            routes={routes}
            logoText="Creative Tim"
            logo={logo}
            image={image}
            handleDrawerToggle={this.handleDrawerToggle}
            open={mobileOpen}
            color="blue"
            {...rest}
          />
          <div className={classes.mainPanel} ref={this.mainPanel}>
            <Header
              routes={routes}
              handleDrawerToggle={this.handleDrawerToggle}
              {...rest}
            />
            <Router history={history} />
            {this.getRoute() ? <Footer /> : null}
          </div>
        </div>
      </Provider>
    )
  }
}

export default withStyles(dashboardStyle)(App)
