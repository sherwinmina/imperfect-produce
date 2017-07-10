import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Container style={{paddingTop: '30px', paddingBottom: '20px'}}>
           {this.props.children}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
