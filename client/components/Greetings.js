import React from 'react';
import {Container, Image} from 'semantic-ui-react';

class Greetings extends React.Component {
  render() {
    return (
      <Container fluid>
        <div className='imageContainer'>
        <h1 style={{}}>Greetings</h1>
        <Image src='https://static1.squarespace.com/static/5628284ee4b0629aedba16be/t/56fea1093c44d8f6830e071e/1459527947646/IMG_7775-2.jpg?format=1500w' fluid></Image>
        </div>
        
      </Container>
    );
  }
}

export default Greetings;
