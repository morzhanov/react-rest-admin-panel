import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import GridItem from '../shared/Grid/GridItem'
import GridContainer from '../shared/Grid/GridContainer'
import { EntityTableConfig } from './config'
import TableData from './UsersStore'
import Table from '../shared/Table/Table'
import Card from '../shared/Card/Card'
import CardHeader from '../shared/Card/CardHeader'
import CardBody from '../shared/Card/CardBody'

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1'
    }
  }
}

const Users = ({ classes }) => (
  <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Simple Table</h4>
          <p className={classes.cardCategoryWhite}>Here is a subtitle for this table</p>
        </CardHeader>
        <CardBody>
          <Table cols={EntityTableConfig.cols} data={TableData} />
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
)

export default withStyles(styles)(Users)
