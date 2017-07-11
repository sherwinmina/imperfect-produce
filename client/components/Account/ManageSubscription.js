import React, { Component } from 'react';
import {Dropdown, Table, Divider, Grid, Image, Container, Advertisement, Card, Icon, Form, Button, TextArea } from 'semantic-ui-react';

const size = [
  { key: 'Small', text: 'Small', value: 'Small' },
  { key: 'Medium', text: 'Medium', value: 'Medium' },
  { key: 'Large', text: 'Graphic Large', value: 'Large' },
  { key: 'Extra-Large', text: 'Graphic Extra-Large', value: 'Extra-Large' }
];

const boxType = [
  { key: 'Fruit', text: 'Fruit', value: 'Fruit' },
  { key: 'Veggie', text: 'Veggie', value: 'Veggie' },
  { key: 'Regular-Produce', text: 'Graphic Regular-Produce', value: 'Regular-Produce' },
  { key: 'Organic Produce', text: 'Graphic Organic Produce', value: 'Organic Produce' }
];

const frequency = [
  { key: 'Every-Week', text: 'Every-Week', value: 'Every-Week' },
  { key: 'Every-Other-Week', text: 'Every-Other-Week', value: 'Every-Other-Week' }
];

class ManageSubscription extends Component {
  render () {
    return (
      <div>
        <Table basic='very'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Box Type</Table.HeaderCell>
              <Table.HeaderCell>Size</Table.HeaderCell>
              <Table.HeaderCell>Frequencey</Table.HeaderCell>
                <Table.HeaderCell>Next Delivery</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Dropdown placeholder='Organic Produce' search selection options={boxType} />
               </Table.Cell>
               <Table.Cell>
                <Dropdown placeholder='Medium' search selection  options={size}/>
               </Table.Cell>
                <Table.Cell>
                <Dropdown placeholder='Every Week' search selection options={frequency} />
               </Table.Cell>
                <Table.Cell>
                  Wednesday 07/12/2017
               </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Divider></Divider>
          <a href="">Cancel My Subscription</a>
          <Button floated='right' color='pink'>Update Order</Button>
          <Button basic floated='right' color='green'>Add A Box</Button>
      </div>
    )
  }
}

export default ManageSubscription