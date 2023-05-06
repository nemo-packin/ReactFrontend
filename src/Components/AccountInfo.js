import React, { Component } from 'react';
import "../Styling/AccountInfoStyles.css";
import axios from "axios";

class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      approval: "",
      major: "",
      minor: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevState major: ${prevState.major}`)
    console.log(`major: ${this.state.major}`)
    if ((prevState.major !== this.state.major) || (prevState.minor !== this.state.minor)) {
      this.updateAccountInfo()
    }
  }

  updateAccountInfo = () => {
    axios.get("http://localhost:8080/api/accountInfo")
      .then((accountI) => {
        console.log("made it here!")
        console.log(accountI)
        this.setState({
          name: accountI.data[0],
          username: accountI.data[1],
          approval: accountI.data[2],
          major: accountI.data[3],
          minor: accountI.data[4]
        });
      })
      .catch((error) => {
        setTimeout(() => {
      }, 1000);
        console.log(error);
      });
  }

  componentDidMount() {
    this.updateAccountInfo()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    axios.post('http://localhost:8080/api/changeName', {
      name: e.target.value
    })
    .then(result => {
      this.setState({ name: e.target[0].value });
      console.log(this.state.name)
    });
  };

  render() {
    const { name, username, approval, major, minor } = this.state;
    const majorOptions = ['Undeclared', 'Applied Science & Engineering', 'Biblical and Religious Studies', 'Philosophy', 'Biology', 'Economics', 'Entrepreneurship', 'Management', 'Marketing', 'Chemistry', 'Communication & Visual Arts', 'Computer Science', 'Data Science', 'Education', 'Electrical Engineering', 'Computer Engineering', 'English', 'Theater', 'Exercise Science', 'History', 'Mechanical Engineering', 'Modern Languages', 'Music', 'Nursing', 'Physics', 'Political Science', 'Psychology', 'Social Work', 'Sociology', 'Writing'];
    const minorOptions = ['None', 'Applied Science & Engineering', 'Biblical and Religious Studies', 'Philosophy', 'Biology', 'Economics', 'Entrepreneurship', 'Management', 'Marketing', 'Chemistry', 'Communication & Visual Arts', 'Computer Science', 'Data Science', 'Education', 'Electrical Engineering', 'Computer Engineering', 'English', 'Theater', 'Exercise Science', 'History', 'Mechanical Engineering', 'Modern Languages', 'Music', 'Nursing', 'Physics', 'Political Science', 'Psychology', 'Social Work', 'Sociology', 'Writing'];
  
    return (
      <div className="account">
        <h2>Account Information</h2>
        <div className="fields">
          <p>Name: {name}</p>
          <p>Username: {username}</p>
          <div>
            <label htmlFor="major">Major: </label>
            <select id="major" value={major} onChange={(e) => {this.handleMajorChange(e.target.value)}}>
              {majorOptions.map((option) => (
                <option key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="minor">Minor: </label>
            <select id="minor" value={minor}  onChange={(e) => {this.handleMinorChange(e.target.value)}}>
              {minorOptions.map((option) => (
                <option key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {approval !== "none" && <p>Schedule Status: {approval}</p>}
        </div>
      </div>
    );
  }
  
  handleMajorChange = (m) => {
    // console.log(event.target.value)
    axios.post('http://localhost:8080/api/changeMajor', {
      major: m
    })
    .then(result => {
      this.setState({ major: m });
      console.log(m)
    });
  };
  
  handleMinorChange = (m) => {
    // console.log(event.target.value)
    axios.post('http://localhost:8080/api/changeMinor', {
      minor: m
    })
    .then(result => {
      this.setState({ minor: m });
      console.log(m)
    });
  };
  
}

export default AccountInfo;
