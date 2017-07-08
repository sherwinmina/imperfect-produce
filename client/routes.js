import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import AccountNav from './components/Account/AccountNav';


// Main Folder
import About from './components/Main/About.js';
import Contact from './components/Main/Contact.js';
import FAQ from './components/Main/FAQ.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} /> 
    <Route path="About" component={About}/>
    <Route path="Contact" component={Contact}/>
    <Route path="FAQ" component={FAQ}/>


    <Route path="account" component={AccountNav}/>
  </Route>
)
