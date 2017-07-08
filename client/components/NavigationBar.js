import React, {Component} from 'react';
import { Link } from 'react-router';

class NavigationBar extends Component {
 
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Imperfect Produce</Link>
            <Link to="/account" className="nav navbar-nav ">My Account</Link>
            <Link to="/" className="nav-item">Logout</Link>
          </div>

          <div className="collapse navbar-collapse">
            
          </div>
        </div>
      </nav>
    );
  }
}


export default NavigationBar;