import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// material-ui components
import withStyles from '@material-ui/core/styles/withStyles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// core components
import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'

import customTabsStyle from '../../../assets/jss/material-dashboard-react/components/customTabsStyle'

class CustomTabs extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const {
      classes,
      headerColor,
      plainTabs,
      tabs,
      title,
      rtlActive
    } = this.props
    const { value } = this.state
    const cardTitle = classNames({
      [classes.cardTitle]: true,
      [classes.cardTitleRTL]: rtlActive
    })
    return (
      <Card plain={plainTabs}>
        <CardHeader color={headerColor} plain={plainTabs}>
          {title !== undefined ? (
            <div className={cardTitle}>{title}</div>
          ) : null}
          <Tabs
            value={value}
            onChange={this.handleChange}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.displayNone,
              scrollButtons: classes.displayNone
            }}
            scrollable
            scrollButtons="auto"
          >
            {tabs.map(prop => {
              let icon = {}
              if (prop.tabIcon) {
                icon = {
                  icon: <prop.tabIcon />
                }
              }
              return (
                <Tab
                  classes={{
                    root: classes.tabRootButton,
                    labelContainer: classes.tabLabelContainer,
                    label: classes.tabLabel,
                    selected: classes.tabSelected,
                    wrapper: classes.tabWrapper
                  }}
                  key={prop.tabName}
                  label={prop.tabName}
                  {...icon}
                />
              )
            })}
          </Tabs>
        </CardHeader>
        <CardBody>
          {tabs.map((prop, key) => {
            if (key === value) {
              return (
                <div key={prop.tabContent.toString()}>{prop.tabContent}</div>
              )
            }
            return null
          })}
        </CardBody>
      </Card>
    )
  }
}

export default withStyles(customTabsStyle)(CustomTabs)
