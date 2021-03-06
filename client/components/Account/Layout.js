import React, { Component } from 'react';
import {Link} from 'react-router';

import { Grid, Image, Menu, Container} from 'semantic-ui-react';
import AccountNav from './AccountNav';

class Layout extends Component {
  render () {
    return (
      <Container fluid>  
        <Grid celled='internally' >
        <Grid.Row columns={2} >
          <Grid.Column mobile={16} tablet={5} computer={4} style={{backgroundColor:'royalBlue'}}>
           <AccountNav/>
          </Grid.Column>
          
          <Grid.Column mobile={16} tablet={11} computer={12}  style={{backgroundColor:'lightGrey'}}>
             {this.props.children}
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Layout;