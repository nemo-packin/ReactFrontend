import React, { Component } from 'react';
import "../Styling/AccountInfoStyles.css";
import axios from "axios";

class AccountInfo extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      username: "",
      approval: ""
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/accountInfo')
        .then(accountI => {
          this.setState({
            name: accountI.data[0],
            username: accountI.data[1],
            approval: accountI.data[2]
          })
        })
        .catch(error => {
          console.log(error)
        })
  }

  render() {
    const { name, username, approval } = this.state;
    return (
      <div className="account">
        <h2>Account Information</h2>
        <div className="fields">
          <p>Name: {name}</p>
          <p>Username: {username}</p>
          {approval !== 'none' && <p>Schedule Status: {approval}</p>}
        </div>
      </div>
    );
  }  
}

export default AccountInfo;