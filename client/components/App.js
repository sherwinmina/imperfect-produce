import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Container>
           {this.props.children}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
