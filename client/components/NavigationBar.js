import React, {Component} from 'react';
import { Link } from 'react-router';
import { Menu, Segment, Dropdown, Button } from 'semantic-ui-react';

import LoginModal from './Main/Login';


class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {activeItem: 'About'};
    
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, {name}) {
    e.preventDefault();
    this.setState({ activeItem: name });
  }
 
  render() {
    const { activeItem } = this.state
    return (
      <div >
        <Menu inverted color='blue' pointing secondary  size='huge' style={{height:'80px'}}>
          <Menu.Item header as={Link} to='/'>
            <img src="http://sfghwellness.org/wp-content/uploads/2012/08/Imperfect-Produce.png" alt=""/>
          </Menu.Item>

          <Menu.Item name='account' active={activeItem === 'account'} header as={Link} to='/account' onClick={this.handleItemClick}>
            <Link to='/account'>My Account</Link>
          </Menu.Item>
          <Menu.Item header name='About' header active={activeItem === 'About'} as={Link} to='/About' onClick={this.handleItemClick}>
            <Link to='About'>About</Link>
          </Menu.Item>
          <Menu.Item header name='FAQ' active={activeItem === 'FAQ'} as={Link} to='/FAQ' onClick={this.handleItemClick}>
            <Link to='/FAQ'>FAQ</Link>
          </Menu.Item>
          <Menu.Item header name='Contact'  active={activeItem === 'Contact'} onClick={this.handleItemClick}>
           <Link to='Contact'>Contact</Link>
          </Menu.Item>
         
          <Menu.Menu position='right'>
            <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
            <Menu.Item><Button color='orange' as={Link} to='/Signup'onClick={this.handleItemClick}>Sign Up</Button></Menu.Item>
            <Menu.Item> <LoginModal/> </Menu.Item>
          </Menu.Menu> 
         
        </Menu>
      </div>
    );
  }
}


export default NavigationBar;