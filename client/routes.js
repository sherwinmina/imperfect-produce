import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import AccountNav from './components/Account/AccountNav';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} /> 
    <Route path="account" component={AccountNav}/>

  </Route>
)
