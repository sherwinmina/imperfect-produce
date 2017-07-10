import React, {Component} from 'react';
import { Link } from 'react-router';
import { Menu, Segment, Dropdown } from 'semantic-ui-react'

class NavigationBar extends Component {
  constructor(props) {
    super(props);
     this.state = {activeItem: 'About'};
    
    //  this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, {name}) {
    e.preventDefault();
    this.setState({ activeItem: name });
  }
 
  render() {
    const { activeItem } = this.state
    return (
      <div >
        <Menu stackable size='huge'>
          <Menu.Item header as={Link} to='/'><img src="http://sfghwellness.org/wp-content/uploads/2012/08/Imperfect-Produce.png" alt=""/></Menu.Item>
          <Menu.Item header as={Link} to='/account'>My Account</Menu.Item>
          <Menu.Item header name='About' header active={activeItem === 'About'} as={Link} to='/About' onClick={this.handleItemClick.bind(this)}/>
          <Menu.Item header as={Link} to='/FAQ'>FAQ</Menu.Item>
          <Menu.Item header as={Link} to='/Contact'>Contact</Menu.Item>
         
          <Menu.Menu position='right'>
            <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick.bind(this)} />
            <Menu.Item name='Signup' header as={Link} to='/Signup' />
            <Menu.Item name='Login' header as={Link} to='/Login' />
          </Menu.Menu> 
         
        </Menu>
      </div>
    );
  }
}


export default NavigationBar;