import React, {Component} from 'react';
import { Link } from 'react-router';
import { Menu, Segment } from 'semantic-ui-react'

class NavigationBar extends Component {
  constructor(props) {
    super(props);
     this.state = {activeItem: 'About'};
  }

  handleItemClick(e, {name}) {
    e.preventDefault();
    this.setState({ activeItem: name });
  }
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state
    return (
      <div >
        <Menu>
          <Menu.Item header as={Link} to='/'><img src="http://sfghwellness.org/wp-content/uploads/2012/08/Imperfect-Produce.png" alt=""/></Menu.Item>
          <Menu.Item header as={Link} to='/account'>My Account</Menu.Item>
          <Menu.Item name='About' header active={activeItem === 'About'} as={Link} to='/About' onClick={this.handleItemClick}/>
          <Menu.Item header as={Link} to='/FAQ'>FAQ</Menu.Item>
          <Menu.Item header as={Link} to='/Contact'>Contact</Menu.Item>
          <Menu.Item header as={Link} to='/Signup'>Sign up</Menu.Item>
          <Menu.Item header as={Link} to='/Login'>Login</Menu.Item>
          <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
          <Menu.Item name='locations' active={activeItem === 'locations'} onClick={this.handleItemClick} />
        </Menu>
      </div>
    );
  }
}


export default NavigationBar;