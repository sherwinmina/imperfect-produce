import React, { Component } from 'react';
import { Container, Card, Icon, Button, Form, Input, Checkbox, Header, Image, Confirm } from 'semantic-ui-react'

class Login extends Component {
  constructor(props){
    super(props)

    this.state = { open: false };

    this.show = this.show.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  
  show() {
    this.setState({ open: true });
  }

  handleConfirm () {
    this.setState({ open: false });
  }
  
  handleCancel() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Button size='large' color='orange' onClick={this.show}>Log In</Button>
        <Confirm
          open={this.state.open}
          content='Login To yoir account'
          cancelButton='Cancel'
          confirmButton="Log In"
          header='Login To Your Account'
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    );
  }
}

export default Login