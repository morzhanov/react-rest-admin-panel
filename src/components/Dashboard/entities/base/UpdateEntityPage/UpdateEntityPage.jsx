import React from 'react'
// @material-ui/core components
import './UpdateEntityPage.styl'
// core components
import GridItem from '../../shared/Grid/GridItem'
import GridContainer from '../../shared/Grid/GridContainer'
import Table from '../../shared/Table/Table'
import Card from '../../shared/Card/Card'
import CardHeader from '../../shared/Card/CardHeader'
import CardBody from '../../shared/Card/CardBody'

const Users = () => (
  <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="primary">
          <h4 className="card-title-white">Simple Table</h4>
          <p className="card-title-white">Here is a subtitle for this table</p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="primary"
            tableHead={['Name', 'Country', 'City', 'Salary']}
            tableData={[
              ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
              ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
              ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
              ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
              ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
              ['Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]}
          />
        </CardBody>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={12} md={12}>
      <Card plain>
        <CardHeader plain color="primary">
          <h4 className="card-title-white">Table on Plain Background</h4>
          <p className="card-category-white">
            Here is a subtitle for this table
          </p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="primary"
            tableHead={['ID', 'Name', 'Country', 'City', 'Salary']}
            tableData={[
              ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
              ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
              ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
              [
                '4',
                'Philip Chaney',
                '$38,735',
                'Korea, South',
                'Overland Park'
              ],
              [
                '5',
                'Doris Greene',
                '$63,542',
                'Malawi',
                'Feldkirchen in Kärnten'
              ],
              ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]}
          />
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
)

export default Users
