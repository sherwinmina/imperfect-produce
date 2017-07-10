import React, { Component } from 'react';
import { Container, Card, Icon, Button, Form, Input, Checkbox } from 'semantic-ui-react'

class Login extends Component {
  render () {
    return (
      <div>
        <Container>
          <Card>
            <h3>Log in</h3>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Card>
        </Container>  
      </div>
    )
  }
}

export default Login