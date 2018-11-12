import React from 'react'
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import BugReport from '@material-ui/icons/BugReport'
import Code from '@material-ui/icons/Code'
import Cloud from '@material-ui/icons/Cloud'
// core components
import GridItem from '../shared/Grid/GridItem'
import GridContainer from '../shared/Grid/GridContainer'
import CustomTabs from '../shared/CustomTabs/CustomTabs'
import dashboardStyle from '../../assets/jss/material-dashboard-react/layouts/dashboardStyle'

const Tasks = () => (
  <div>
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <CustomTabs
          title="Tasks:"
          headerColor="primary"
          tabs={[
            {
              tabName: 'Bugs',
              tabIcon: BugReport,
              tabContent: <div />
            },
            {
              tabName: 'Website',
              tabIcon: Code,
              tabContent: <div />
            },
            {
              tabName: 'Server',
              tabIcon: Cloud,
              tabContent: <div />
            }
          ]}
        />
      </GridItem>
    </GridContainer>
  </div>
)

export default withStyles(dashboardStyle)(Tasks)
