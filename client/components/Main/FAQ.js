import React, { Component } from 'react';
import { Divider, Accordion, Container, Icon} from 'semantic-ui-react';

class FAQ extends Component {
  render () {
    return (
      <Container>
         <Divider horizontal><h3>SERVICE AREA</h3></Divider>
          <Accordion>
            <Accordion.Title>
              <Icon name='dropdown' />
             Where Do You Deliver? 
            </Accordion.Title>
            <Accordion.Content>
              <p>
                We deliver to the entire Bay Area, Los Angeles, and Orange County. We’re expanding quickly–so be sure to check back often if we’re not in your neighborhood yet! To check if we deliver in your area, visit our signup page, click on a box, then enter your zip code on the popup. <a href="">Check delivery ></a>
              </p>
            </Accordion.Content>
          </Accordion>

          <Accordion>
            <Accordion.Title>
              <Icon name='dropdown' />
             WHY IS MY ACCOUNT SUSPENDED?
            </Accordion.Title>
            <Accordion.Content>
              <p>If you sign up for an account but aren't in our delivery area yet, your account will automatically be put on hold. We’ll drop you a note and take the hold off of your account when we reach your area!              </p>
            </Accordion.Content>
          </Accordion>

        <Divider horizontal><h3>UGLY PRODUCE</h3></Divider>
          <Accordion>
            <Accordion.Title>
              <Icon name='dropdown' />
             WHAT IS IMPERFECT AND HOW DOES IT WORK?
            </Accordion.Title>
            <Accordion.Content>
              <p>If you sign up for an account but aren't in our delivery area yet, your account will automatically be put on hold. We’ll drop you a note and take the hold off of your account when we reach your area!              </p>
            </Accordion.Content>
          </Accordion>

        <Divider horizontal><h3>DELIVERY</h3></Divider>
          <Accordion>
            <Accordion.Title>
              <Icon name='dropdown' />
             WHY IS MY ACCOUNT SUSPENDED?
            </Accordion.Title>
            <Accordion.Content>
              <p>If you sign up for an account but aren't in our delivery area yet, your account will automatically be put on hold. We’ll drop you a note and take the hold off of your account when we reach your area!              </p>
            </Accordion.Content>
          </Accordion>
        <Divider horizontal> <h3>USING OUR ORDERING SYSTEM</h3></Divider>
          <Accordion>
            <Accordion.Title>
              <Icon name='dropdown' />
             HOW DOES DELIVERY WORK?
            </Accordion.Title>
            <Accordion.Content>
              <p>On your assigned delivery day, a driver will drop off your produce box. It will be delivered to you if you are home, or left in a place you specify if you aren't home. Our packing and delivery schedule is designed to keep the produce as fresh as possible when it gets to your doorstep!</p>
            </Accordion.Content>
          </Accordion>
        <Divider horizontal> <h3>CONTACT</h3></Divider>
        <Accordion>
            <Accordion.Title>
              <Icon name='dropdown' />
             HOW DO I CUSTOMIZE MY ORDER?
            </Accordion.Title>
            <Accordion.Content>
              <p>Each week, you’ll get an email with a link to customize your box. From there, you will be able to see which items are in the default box that week and add or remove any items to customize your produce box, up until the cutoff time.    </p>
            </Accordion.Content>
          </Accordion>
      </Container>
    )
  }
}

export default FAQ;