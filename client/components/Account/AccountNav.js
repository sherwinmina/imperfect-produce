import React, { Component } from 'react';
import {Link} from 'react-router';

class AccountNav extends Component {
  render () {
    return (
      <div>
       <Link className="">My Account</Link>
       <Link>Account Details</Link>
       <Link>Billing Details</Link>
       <Link>Delivery Schedule</Link>
       <Link>Manage Subscription</Link>
       <Link>Refer Friends</Link>

      <div className="display">
        
       </div>
      </div>
    )
  }
}

export default AccountNav;