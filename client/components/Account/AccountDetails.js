import React, { Component } from 'react';
import {Divider, Grid, Image, Container, Advertisement, Card, Icon, Form, Button, TextArea } from 'semantic-ui-react';


class Details extends Component {
  render () {
    return (
      <div>
      <h1>Email</h1>
        example@email.com
        <Divider></Divider>
        <h1>Delivery Adress</h1>
        <h5>First Name</h5>
        John
        <h5>Last Name</h5>
        Smith
        <h5>Phone</h5>
        (415) 111-1111

        <h5>Delivery Notes</h5>
        Please enter the gate code -Start (red button) #8289
        and leave in front of the door inside the gate.
        <Divider></Divider>
        <Button basic> Edit </Button>
      </div>
    )
  }
}

export default Details;