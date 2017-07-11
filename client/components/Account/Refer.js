import React, { Component } from 'react';
import {Dropdown, Table, Divider, Grid, Image, Container, Advertisement, Card, Icon, Form, Button, TextArea } from 'semantic-ui-react';


class ReferFriends extends Component {
  render () {
    return (
      <div>
         <Card fluid>
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
      </div>
    )
  }
}

export default ReferFriends