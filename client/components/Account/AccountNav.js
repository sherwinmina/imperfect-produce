import React, { Component } from 'react';
import {Link} from 'react-router';

import { Grid, Image, Menu } from 'semantic-ui-react'

class AccountNav extends Component {
  render () {
    return (
      <div>
      
      
        <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}>
            <Menu color={"teal"} vertical>
              <Menu.Item header as={Link} to='/'>Imperfect Produce</Menu.Item>
              <Menu.Item>My Account</Menu.Item>
                <Menu.Item>Account Details</Menu.Item>
                <Menu.Item>Billing Details</Menu.Item>
                <Menu.Item>Delivery Schedule</Menu.Item>
                <Menu.Item>Manage Subscription</Menu.Item>
                <Menu.Item>Refer Friends</Menu.Item>
            </Menu>
          </Grid.Column>
          
          <Grid.Column width={12}>
            <Image src='/assets/images/wireframe/centered-paragraph.png' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
            <Image src='/assets/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column width={10}>
            <Image src='/assets/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src='/assets/images/wireframe/image.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
          

      <div className="display">
        
       </div>
      </div>
    )
  }
}

export default AccountNav;