import React, { Component } from 'react';
import {Link} from 'react-router';

import { Grid, Image, Menu } from 'semantic-ui-react';
import AccountNav from './AccountNav';

class Layout extends Component {
  render () {
    return (
      <div>  
        <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}>
           <AccountNav/>
          </Grid.Column>
          
          <Grid.Column width={12}>
             {this.props.children}
          </Grid.Column>
        </Grid.Row>

        
      </Grid>
          

      <div className="display">
        
       </div>
      </div>
    )
  }
}

export default Layout;