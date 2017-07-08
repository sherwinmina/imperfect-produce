import React, { Component } from 'react';
import {Link} from 'react-router';

import { Grid, Image } from 'semantic-ui-react'

class AccountNav extends Component {
  render () {
    return (
      <div>
      
        <div className="display">
        
         
        </div>
        <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
         <Link className="">My Account</Link>
          <Link>Account Details</Link>
          <Link>Billing Details</Link>
          <Link>Delivery Schedule</Link>
          <Link>Manage Subscription</Link>
          <Link>Refer Friends</Link>
      </Grid.Column>
      <Grid.Column width={13}>
        <Image src='/assets/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
       

      <div className="display">
        
       </div>
      </div>
    )
  }
}

export default AccountNav;