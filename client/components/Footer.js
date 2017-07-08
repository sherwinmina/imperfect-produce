import React, { Component } from 'react';
import { Container, Grid, Image, Input, Divider, Icon } from 'semantic-ui-react'

class Footer extends Component {
  render () {
    return (
      <Container>
      <Grid columns={3}>
       <Divider></Divider>
       
        <Grid.Row>
        <Grid.Column  mobile={16} tablet={8} computer={4}>
            <h5>Follow Us</h5>
            <Icon  name='facebook square' size='large' color="teal" />
            <Icon name='twitter' size='large' color="teal" />
            <Icon name='pinterest' size='large' color="teal"/>
            <Icon name='instagram' size='large' color="teal"/>
          </Grid.Column>
          <Grid.Column  mobile={16} tablet={8} computer={4}>
                    <Input action={{content: 'Subscribe', color:'teal'}} placeholder='example@gmail.com' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <h5>The weekly Beet</h5>
          </Grid.Column>
        </Grid.Row>

          <Divider></Divider>

        <Grid.Row>
          
          <Grid.Column>
            <h5>Address</h5>
            <p>1600 Donner Ave.
              San Francisco, CA
              94124</p>
          </Grid.Column>
         
          <Grid.Column>
            <h5>Information</h5>
            <p>About</p>
            <p>Contact</p>
            <p>Jobs</p>
          </Grid.Column>

          <Grid.Column>
            <h5>Help</h5>
            <p>Customer Support</p>
            <p>FAQ</p>
          </Grid.Column>
        </Grid.Row>
        <Divider></Divider>
         <Grid.Row>
        <p>imperfect Foods, inc 2017. All Rights Reserve.</p>
         </Grid.Row>
      </Grid>
      </Container>
    )
  }
}

export default Footer;