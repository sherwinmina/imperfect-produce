import React, { Component } from 'react';
import { Container, Grid, Image, Input, Divider } from 'semantic-ui-react'

class Footer extends Component {
  render () {
    return (
      <Container>
      <Grid columns={3}>
       <Divider></Divider>
       <Grid.Column width={12}>
            <h5>The weekly Beet</h5>
          </Grid.Column>
        <Grid.Row>
          <Grid.Column  width={8}>
                    <Input action={{content: 'Subscribe', color:'teal'}} placeholder='example@gmail.com' />
          </Grid.Column>
          <Grid.Column>
            <h5>The weekly Beet</h5>
          </Grid.Column>
        </Grid.Row>

          <Divider></Divider>

        <Grid.Row>
          <Grid.Column>
            <h5>Address</h5>
          </Grid.Column>
          <Grid.Column>
              <h5>Information</h5>
          </Grid.Column>
          <Grid.Column>
            <h5>Help</h5>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
    )
  }
}

export default Footer;