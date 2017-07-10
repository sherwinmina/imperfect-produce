import React, { Component } from 'react';
import {Link} from 'react-router';
import { Container, Grid, Image, Input, Divider, Icon, Segment } from 'semantic-ui-react';

class Footer extends Component {
  render () {
    return (
      <Container>
      <Divider></Divider>

      <Grid stackable columns={3} padded>
        <Grid.Row>
        <Grid.Column width={4} >
            <h4 style={{color:'teal'}}>Follow Us</h4>
            <Icon  name='facebook square' size='large' color="teal" />
            <Icon name='twitter' size='large' color="teal" />
            <Icon name='pinterest' size='large' color="teal"/>
            <Icon name='instagram' size='large' color="teal"/>
          </Grid.Column>

          <Grid.Column width={7} >
              <Input action={{content: 'Subscribe', color:'teal'}} placeholder='example@gmail.com' />
          </Grid.Column>
          <Grid.Column width={3}>
            <h5>The weekly Beet</h5>
          </Grid.Column>

        </Grid.Row>
        <Divider></Divider>
      </Grid>

      <Grid columns={3} padded>
        <Grid.Row>
          
          <Grid.Column>
            <h5>Address</h5>
            <p>1600 Donner Ave.
              San Francisco, CA
              94124</p>
          </Grid.Column>
         
          <Grid.Column>
            <h5>Information</h5>
            <p><Link> About</Link></p>
            <p><Link>Contact</Link></p>
            <p><Link>Jobs</Link></p>
          </Grid.Column>

          <Grid.Column>
            <h5>Help</h5>
            <p><Link>Customer Support</Link></p>
            <p><Link>FAQ</Link></p>
          </Grid.Column>
          </Grid.Row>
          
          <Divider></Divider>
          <Grid.Row>
          <p>Imperfect Foods, inc 2017. All Rights Reserve.</p>
          </Grid.Row>
      </Grid>
      </Container>
    )
  }
}

export default Footer;