import React, { Component } from 'react';
import {Link} from 'react-router'
import { Container, Card, Button, Form, Input, Checkbox, Header, Image, Modal, Icon} from 'semantic-ui-react'

class Login extends Component {
 
  render() {
    return (
      <div>
        <Modal trigger={<Button size='large' color='orange'>Login</Button>} closeIcon='close'>            
          <Header icon='user' content='Log In To Your Account' />
          <Modal.Content>
           <Form style={{paddingBottom: '20px'}}>
            <Form.Field>
                <label>Email</label>
                <input placeholder='Yourname@gmail.com' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field>
            </Form>
            <Checkbox label='Remeber me'/><Link style={{float: 'right'}}>Forgot your Password?</Link>

          </Modal.Content>
          <Modal.Actions>
            Not a member yet? <Link to='/Signup'>Sign up</Link>
            <Button color='red'>
              Cancel
            </Button>
            <Button primary onClick={this.close} >
              Log In
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default Login