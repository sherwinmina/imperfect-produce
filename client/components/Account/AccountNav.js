import React, { Component } from 'react';
import {Link} from 'react-router';

import { Menu , Icon } from 'semantic-ui-react'

class AccountNav extends Component {
  constructor(props) {
    super(props);
    this.state = {activeItem: 'AccountDetail'};

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}) {
    this.setState({ activeItem: name });
  }

  render () {
    const { activeItem } = this.state;

    return (
        <Menu fluid color='teal'  vertical>
          <Menu.Item name='MyAccount' active={activeItem === 'MyAccount'} header as={Link} to='MyAccount'  onClick={this.handleItemClick}>
              <Link to='/MyAccount'><Icon name='home' />My Account</Link>
            </Menu.Item>
            <Menu.Item name='AccountDetail' active={activeItem === 'AccountDetail'} header as={Link} to='AccountDetail'  onClick={this.handleItemClick}>
              <Link to='/AccountDetail'><Icon name='user' /> Account Detail</Link>
            </Menu.Item>
            <Menu.Item name='Billing' active={activeItem === 'Billing'} header as={Link} to='Billing' onClick={this.handleItemClick}>
              <Link to='/Billing'><Icon name='dollar' />Billing</Link>
            </Menu.Item>
            <Menu.Item name='Delivery' active={activeItem === 'Delivery'} header as={Link} to='Delivery' onClick={this.handleItemClick}>
              <Link to='/Delivery'><Icon name='truck' />Delivery</Link></Menu.Item>
            <Menu.Item name='ManageSubscription' active={activeItem === 'ManageSubscription'} header as={Link} to='ManageSubscription' onClick={this.handleItemClick}>
              <Link to='ManageSubscription'><Icon name='mail' />Manage Subscription</Link>
            </Menu.Item>
            <Menu.Item name='Refer' active={activeItem === 'Refer'} header as={Link} to='Refer' onClick={this.handleItemClick}>
              <Link to='Refer'><Icon name='smile' />Refer Friends</Link>
            </Menu.Item>
        </Menu>   
    );
  }
}

export default AccountNav;