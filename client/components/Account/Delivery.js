import React, { Component } from 'react';
import {Table, Divider, Grid, Image, Container, Advertisement, Card, Icon, Form, Button, TextArea } from 'semantic-ui-react';


class Delivery extends Component {
  render () {
    return (
      <div>
        <h1> Delivery Schedule</h1>
        <h1>Wednesday, July 19</h1>
        <h3>Delivery Times: 6pm Tuesday - 6am Wednesday</h3>
        <a href="">More about delivery</a>

        <Divider></Divider>
        <h1> Upcoming Deliveries</h1>

      <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Dates</Table.HeaderCell> 
          <Table.HeaderCell>Type of Box</Table.HeaderCell>  
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row >
          <Table.Cell>Wednesday July 12, 2017</Table.Cell>
          <Table.Cell>Organic Box Medium</Table.Cell>
          <Table.Cell> <Button>View Your Order</Button></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Wednesday July 19, 2017</Table.Cell>
          <Table.Cell>Organic Box Medium</Table.Cell>
          <Table.Cell> <Button basic primary>Skip</Button></Table.Cell>  
        </Table.Row>
        <Table.Row>
          <Table.Cell>Wednesday July 26, 2017</Table.Cell>
          <Table.Cell>Conventional mixed fruit and veggies Large</Table.Cell>
          <Table.Cell> <Button basic primary>Skip</Button></Table.Cell>
    
        </Table.Row>

        <Table.Row>
          <Table.Cell>August 2, 2017</Table.Cell>
          <Table.Cell>Conventional mixed fruit and veggies Large</Table.Cell>
          <Table.Cell> <Button primary>Unskip</Button></Table.Cell>
        </Table.Row>

         <Table.Row >
          <Table.Cell>ednesday August 9, 2017</Table.Cell>
          <Table.Cell>Organic Box Medium</Table.Cell>
          <Table.Cell> <h4>Unscheduled</h4></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
        
      </div>
    )
  }
}

export default Delivery