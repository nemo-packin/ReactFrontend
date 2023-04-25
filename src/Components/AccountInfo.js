import React, { Component } from 'react';
import "../Styling/AccountInfoStyles.css";
import axios from "axios";

class AccountInfo extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      username: ""
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/accountInfo')
        .then(accountI => {
          this.setState({
            name: accountI.data[0],
            username: accountI.data[1]
          })
        })
        .catch(error => {
          console.log(error)
        })
  }

  render() {
    const{name, username} = this.state
    return (
        <div className = "account">
          <h2>Account Information</h2>
          <div className = "fields"></div>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
          <div/>
        </div>
      );
  }
}

export default AccountInfo;