import React, { Component } from 'react'
import { Grid, Image, Container, Card, Icon, Button, Form, Input, Segment } from 'semantic-ui-react'

class Signup extends Component {
  render () {
    return (
      <div>
        <Grid centered columns={4} padded>
          <Grid.Column>
          
              <Segment>
               <Container>
                <h3>Sign Up</h3>
                <Form>
                  <Form.Field>
                    <label>Email</label>
                    <input placeholder='Yourname@gmail.com' />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                  </Form.Field>
                  <Form.Field>
                    <label>Confirm Password</label>
                    <input placeholder='Confirm Password' />
                  </Form.Field>
                  <Button primary type='submit'>Submit</Button>
                </Form>
                </Container>
              </Segment>
              
            </Grid.Column>
         
            
          
        </Grid>
        
      </div>
    )
  }
}

export default Signup;