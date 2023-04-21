import React, {Component} from 'react';
import "../Styling/AccountInfoStyles.css";

class AccountInfo extends Component {
  render() {
    return (
        <div className = "account">
          <h2>Account Information</h2>
          <div className = "fields"></div>
            <p>Username: emilynraine</p>
            <p>Email: raineen20@gcc.edu</p>
            <p>First Name: Emily</p>
            <p>Last Name: Raine</p>
          <div/>
        </div>
      );
  }
}

export default AccountInfo;