import React, { Component } from 'react';
import {Link} from 'react-router';
import { Container, Grid, Image, Input, Divider, Icon, Segment } from 'semantic-ui-react';

class Footer extends Component {
  render () {
    return (
      <div>
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
            <h5>Don't Miss a Beet, Sign up for our News Letter.</h5>
              <Input action={{content: 'Subscribe', color:'teal'}} placeholder='example@gmail.com' />
          </Grid.Column>
          <Grid.Column width={3}>
            <h5>The weekly Beet</h5>
            <a href="http://www.blog.imperfectproduce.com/blog-1/2017/7/6/what-do-i-cook-with-that">
              <p>How to cook Romanesco Cauliflower</p>
            </a>
            
            <img src="https://www.jungseed.com/PIF/01733/JungSeed.jpg" alt="Smiley face" height="60" width="60"/>
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
            <p><Link to='/About'> About</Link></p>
            <p><Link to='/Contact'>Contact</Link></p>
            <p><Link to='/Jobs'>Jobs</Link></p>
          </Grid.Column>

          <Grid.Column>
            <h5>Help</h5>
            <p><Link to='/Contact'>Customer Support</Link></p>
            <p><Link to='FAQ'>FAQ</Link></p>
          </Grid.Column>
          </Grid.Row>
          
          <Divider></Divider>
          <Grid.Row>
          <p>Imperfect Foods, inc 2017. All Rights Reserve.</p>
          </Grid.Row>
      </Grid>
      </div>
    )
  }
}

export default Footer;