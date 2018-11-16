import React from 'react'
import './Dashboard.styl'
import logo from '../../assets/img/reactlogo.png'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'
import Sidebar from '../shared/Sidebar/Sidebar'
import routes from '../../router/routes'
import createRouter from '../../router/createRouter'

class Dashboard extends React.Component {
  state = {
    mobileOpen: false
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeFunction)
    this.mainPanel = React.createRef()
  }

  componentDidUpdate(props) {
    const { mobileOpen } = this.state
    if (props.history && props.history.location.pathname !== props.location.pathname) {
      this.mainPanel.current.scrollTop = 0
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

    const DashboardRouter = createRouter(routes.admin.children)

    return (
      <div className="dashboard">
        <Sidebar
          routes={routes.admin.children}
          logoText="Admin dashboard"
          logo={logo}
          handleDrawerToggle={this.handleDrawerToggle}
          open={mobileOpen}
          color="blue"
          {...rest}
        />
        <div className="dashboard__main-panel" ref={this.mainPanel}>
          <Header
            routes={routes.admin.children}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          <div className="dashboard__content">
            <DashboardRouter />
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Dashboard
