import React, {Component} from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react'

class NavigationBar extends Component {
  constructor(props) {
    super(props);
     this.state = {};
  }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state
    return (
      <div >
        <Menu>
          <Menu.Item header as={Link} to='/'>Imperfect Produce</Menu.Item>
          <Menu.Item header as={Link} to='/account'>My Account</Menu.Item>
          <Menu.Item header as={Link} to='/logout'>Logout</Menu.Item>
          <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
          <Menu.Item name='locations' active={activeItem === 'locations'} onClick={this.handleItemClick} />
        </Menu>
      </div>
    );
  }
}


export default NavigationBar;