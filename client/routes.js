import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';

// Main Folder
import About from './components/Main/About.js';
import Contact from './components/Main/Contact.js';
import FAQ from './components/Main/FAQ.js';
import Signup from './components/Main/Signup.js';
import Jobs from './components/Main/Jobs.js';

// Account Folder
import Layout from './components/Account/Layout';
import AccountDetail from './components/Account/AccountDetails';
import Billing from './components/Account/Billing';
import Delivery from './components/Account/DeliverySchedule';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} /> 
    <Route path="About" component={About}/>
    <Route path="Contact" component={Contact}/>
    <Route path="FAQ" component={FAQ}/>
    <Route path="Signup" component={Signup}/>
    <Route path="Jobs" component={Jobs}/>

    <Route path="account" component={Layout}>
      <Route path="/AccountDetail" component={AccountDetail}/>
      <Route path="/Billing" component={Billing}/>
      <Route path="/Delivery" component={Delivery}/>
    </Route>
  </Route>
)
