import React, { Component } from 'react';

import { Grid, Image, Container, Advertisement, Card, Icon, Form, Button, TextArea } from 'semantic-ui-react';

class MyAccount extends Component {
  render () {
    return (
      <div>
       <Advertisement unit='top banner' test='Vertical Banner' />

        <Grid colums='equal' style={{paddingTop: '30px'}}>
          <Grid.Row colums={2}>
          <Grid.Column   mobile={8} tablet={8} computer={8}>
            <Card>
              <Card.Content header='Your next box will be deleivered on:' />
                <Card.Content> <h1 style={{color: 'red'}}>Wednesday, July 19</h1> </Card.Content>
                 <Card.Content> <p style={{color: 'teal'}}>Organic Produce</p> <p>medium</p> </Card.Content>
                <Card.Content extra>
                You can customize your box from 3pm on Friday, July 14 until 9PM on Sunday, July 0. We know, it’s hard to wait!
                </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column  mobile={8} tablet={8} computer={8}>
           
            <Card>
              <Card.Content> <h1 style={{color: 'RoyalBlue'}}>Give $10, Get $10!</h1> </Card.Content>
              <Card.Content> 
                <h5 style={{color: 'grey'}}>You and a friend each get $10 in Imperfect credit when they sign up using your personalized referral link</h5> 
                <h5>Paste emails below to invite your friends:</h5>

                <Form style={{paddingBottom: '10px'}}>
                  <TextArea autoHeight placeholder='Please add emails seperated by commas' />
                </Form>
                <Button primary fluid><Icon name='send outline' />Send Email</Button>
                <h5>Or use this link to invite your friends:</h5>
               
                <Form style={{paddingBottom: '10px'}}>
                  <TextArea autoHeight placeholder='https://www.imperfectproduce.com/register.php?referral=96774' rows={1} />
                </Form>
                <Button color='facebook'>
                  <Icon name='facebook' /> Share
                </Button>
                 <Button color='twitter'>
                  <Icon name='twitter' />Tweet
                </Button>
              </Card.Content>
            </Card>
            
          </Grid.Column>
          
          </Grid.Row>
        </Grid>

           
        <Card>
          <Card.Content header='About Amy' />
          <Card.Content description='Hello there' />
          <Card.Content extra>
            <Icon name='user' />
            4 Friends
          </Card.Content>
        </Card>

        
        
      </div>
    )
  }
}

export default MyAccount;