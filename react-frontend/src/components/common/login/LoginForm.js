import React from "react"
import './LoginForm.css'
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

export class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emailOrUsername: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    axios.get('http://localhost:5050/auth', { params : {email: this.state.emailOrUsername, pwd: this.state.password}})
        .then((response) => {
          alert(`Authenticated: ${response.data}`)
        })
        .catch((error) => {
          if (error.response.data) {
            alert(`Error: ${error.response.data}`)
          } else {
            // client never received a response
            alert("Could not connect to server")
          }
        })
  }



  render() {
    return (<div className="Auth-form-container">
      <form className="Auth-form" onSubmit={this.handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="text"
                name="emailOrUsername"
                placeholder="Enter email"
                value={this.state.emailOrUsername}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                name="password"
                placeholder="Enter password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <input type="submit" value="Submit" />
            </div>
          <p></p>
          <p></p>
        </div>
      </form>
    </div>)
  }
}