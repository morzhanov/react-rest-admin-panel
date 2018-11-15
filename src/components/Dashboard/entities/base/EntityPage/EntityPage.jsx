import React from 'react'
import styled from 'styled-components'
import GridItem from '../../../../shared/Grid/GridItem'
import GridContainer from '../../../../shared/Grid/GridContainer'
import Table from '../../../../shared/Table/Table'
import Card from '../../../../shared/Card/Card'
import CardHeader from '../../../../shared/Card/CardHeader'
import CardBody from '../../../../shared/Card/CardBody'

const Title = styled.h4`
  color: #fff;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif,
  margin: 0;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: '0';
  cursor: default;
`

const SubTitle = styled.p`
  color: #fff;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif,
  min-height: auto;
  font-weight: 300;
  margin-bottom: 3px;
  text-decoration: 'none';
  margin-top: 0;
  margin-bottom: 3px;
  cursor: default;
`

const EntityPage = ({ title, subtitle, cols, data }) => (
  <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="primary">
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </CardHeader>
        <CardBody>
          <Table cols={cols} data={data} />
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
)

export default EntityPage
