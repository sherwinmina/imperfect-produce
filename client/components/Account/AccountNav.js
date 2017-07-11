import React, { Component } from 'react';
import {Link} from 'react-router';

import { Menu } from 'semantic-ui-react'

class AccountNav extends Component {
  constructor(props) {
    super(props);
    this.state = {activeItem: ''};
  }

  handleItemClick(e, {name}) {
    this.setState({ activeItem: name });
  }

  render () {
    const { activeItem } = this.state

    return (
        <Menu color={"teal"} vertical>
            <Menu.Item header as={Link} to='AccountDetail'>Account Details</Menu.Item>
            <Menu.Item header as={Link} to='Billing'>Billing Details</Menu.Item>
            <Menu.Item Item header as={Link} to='Delivery'>Delivery Schedule</Menu.Item>
            <Menu.Item Item header as={Link} to='ManageSubscription'>Manage Subscription</Menu.Item>
            <Menu.Item Item header as={Link} to='Refer'>Refer Friends</Menu.Item>
        </Menu>   
    );
  }
}

export default AccountNav;