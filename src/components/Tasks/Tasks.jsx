import React from 'react'
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import BugReport from '@material-ui/icons/BugReport'
import Code from '@material-ui/icons/Code'
import Cloud from '@material-ui/icons/Cloud'
import dashboardStyle from '../../assets/jss/material-dashboard-react/views/dashboardStyle'
// core components
import GridItem from '../shared/Grid/GridItem'
import GridContainer from '../shared/Grid/GridContainer'
import Table from '../shared/Table/Table'
import TasksTable from '../shared/Tasks/Tasks'
import CustomTabs from '../shared/CustomTabs/CustomTabs'
import Card from '../shared/Card/Card'
import CardHeader from '../shared/Card/CardHeader'
import CardBody from '../shared/Card/CardBody'

import { bugs, website, server } from '../../variables/general'

const Tasks = ({ classes }) => (
  <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
      <CustomTabs
        title="Tasks:"
        headerColor="primary"
        tabs={[
          {
            tabName: 'Bugs',
            tabIcon: BugReport,
            tabContent: (
              <Tasks
                checkedIndexes={[0, 3]}
                tasksIndexes={[0, 1, 2, 3]}
                tasks={bugs}
              />
            )
          },
          {
            tabName: 'Website',
            tabIcon: Code,
            tabContent: (
              <TasksTable
                checkedIndexes={[0]}
                tasksIndexes={[0, 1]}
                tasks={website}
              />
            )
          },
          {
            tabName: 'Server',
            tabIcon: Cloud,
            tabContent: (
              <TasksTable
                checkedIndexes={[1]}
                tasksIndexes={[0, 1, 2]}
                tasks={server}
              />
            )
          }
        ]}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={6}>
      <Card>
        <CardHeader color="warning">
          <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
          <p className={classes.cardCategoryWhite}>
            New employees on 15th September, 2016
          </p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="warning"
            tableHead={['ID', 'Name', 'Salary', 'Country']}
            tableData={[
              ['1', 'Dakota Rice', '$36,738', 'Niger'],
              ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
              ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
              ['4', 'Philip Chaney', '$38,735', 'Korea, South']
            ]}
          />
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
)

export default withStyles(dashboardStyle)(Tasks)
