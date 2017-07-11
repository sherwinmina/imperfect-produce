import React, { Component } from 'react';
import {Divider, Grid, Image, Container, Advertisement, Card, Icon, Form, Button, TextArea } from 'semantic-ui-react';


class Billing extends Component {
  constructor(props) {
    super(props)

    this.state= {
      address: '1954 Jessie Steet',
      city: 'San Francisco',
      state: 'CA',
      zip: '94011'
    };
  } 
  render () {
   const {address, city, state, zip} = this.state;
    return (
      <div>
       <h4>Card Number</h4>
       xxxxxxxxxxxxxxxxxxx
       <Divider/>
       <h2>Billing Address</h2>
       <h5>Street Address</h5>
       {address}
       <h5>city</h5>
       <p>{city}</p>

       <h5>state</h5>
       <p>{state}</p>
       <h5>zip</h5>
       <p>{zip}</p>

       <Button basic>Edit</Button>

       <Divider/>

       <h2>Billing History</h2>
       <Divider/>
       Current Balance as of This Week: $29.37
      </div>
    )
  }
}

export default Billing