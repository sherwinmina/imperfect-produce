import React, { Component } from 'react';
import {Link} from 'react-router';

import { Menu } from 'semantic-ui-react'

class AccountNav extends Component {
  render () {
    return (
        <Menu color={"teal"} vertical>
          <Menu.Item header as={Link} to='/'>Imperfect Produce</Menu.Item>
          <Menu.Item>My Account</Menu.Item>
            <Menu.Item header as={Link} to='AccountDetail'>Account Details</Menu.Item>
            <Menu.Item header as={Link} to='Billing'>Billing Details</Menu.Item>
            <Menu.Item Item header as={Link} to='Delivery'>Delivery Schedule</Menu.Item>
            <Menu.Item>Manage Subscription</Menu.Item>
            <Menu.Item>Refer Friends</Menu.Item>
        </Menu>   
    );
  }
}

export default AccountNav;