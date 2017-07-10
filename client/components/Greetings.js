import React from 'react';
import { Container, Image, Button, Grid, Segment, Embed } from 'semantic-ui-react';


class Greetings extends React.Component {
  render() {
      const picture2 ='http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/v1/11698/imperfect-produce_dxzpdz.jpg'
      const picture = 'https://static1.squarespace.com/static/5628284ee4b0629aedba16be/t/56fea1093c44d8f6830e071e/1459527947646/IMG_7775-2.jpg?format=1500w';
    return (
      <Container fluid>
        <div className='imageContainer' 
            style={{ height: '500px',backgroundImage: `url(${picture})` }}>
          <Container style={{paddingTop:'100px'}}>
          <Grid>
            <Grid.Column floated='left' computer={5} mobile={16}>
              <h1>Ugly Produce.</h1>
              <h1>Delivered.</h1>
              <p>Healthy, delicious fruits and veggies for 30-50% less than grocery stores, delivered to your door.</p>
              <Button primary fluid>Sign Up</Button>
            </Grid.Column>
          </Grid>
          </Container>
        </div>
         
         <div className='imageContainer' 
            style={{ height: '500px',backgroundImage: `url(${picture2})` }}>
          <Container style={{paddingTop:'50px'}}>
          <Grid>
            <Segment.Group horizontal>
              <Segment>
                <h1>4.4M</h1>
                <h5>POUNDS OF FOOD SAVE</h5>
                <h1>$2.0M</h1>
                <h5>DOLLARS SAVED ON GROCERIES</h5>
              </Segment>
              <Segment>
                <h1>220M</h1>
                <h5>GALLONS OF WATER SAVED</h5>
                <h1>15M</h1>
                <h5>POUNDS OF CO2 SAVED</h5>
              </Segment>
            </Segment.Group>
            

            <Grid.Column floated='right' computer={5} mobile={16}>
              <h1>Our community is changing the world!</h1>
              <p>Fact: 1 in 5 fruits and veggies grown in the U.S. don't meet cosmetic standards – the crooked carrot, the curvy cucumber, the undersized apple – usually causing them to go to waste. We’re here to change that.</p>
              <Button primary fluid>Make An Impact!</Button>

              <p>Sources: 
              <a href="http://wfn.project-platforms.com/Reports/Report47-WaterFootprintCrops-Vol1.pdf">UNESCO</a>
              and <a href="http://www.ewg.org/meateatersguide/">Environmental Working Group</a>
              </p>
            </Grid.Column>
            
          </Grid>
          </Container>
        </div>

        <Embed
          id='Gi4iSrdlOXk'
          placeholder='https://biohomecares.com/wp-content/uploads/imperfects_images_from_Uli-1.jpg'
          source='youtube'
        />
        
      </Container>
    );
  }
}

export default Greetings;
