import React from 'react';
import './LoginForm.css';
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
//import { Navigate } from 'react-router-dom';
// import { useAuth } from '../../auth';
// import { useNavigate } from 'react-router-dom';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailOrUsername: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    // const auth = useAuth();
    // const navigate = useNavigate();
    // navigate('/user');
    // let nav;
    axios
      .get('http://localhost:5050/auth', {
        params: { email: this.state.emailOrUsername, pwd: this.state.password }
      })
      .then((response) => {
        alert(`Authenticated: ${response.data}`);
        // nav = response.data;
        //navigate('/user');
        // if (response.data == true) {
        //   // this.auth.login(response);
        //   auth.login(this.response.data);
        //   navigate('/user');
        //   // useNavigate('/');
        // }
      })
      .catch((error) => {
        if (error.response === undefined) {
          alert(`Error: ${error.response}`);
        } else {
          // client never received a response
          alert('Could not connect to server');
        }
      });
    // if (nav == true) {
    //   navigate('/user');
    // }
  }

  render() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={this.handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label style={{ paddingRight: 0.5 + 'em' }}>Email address</label>
              <input
                type="text"
                name="emailOrUsername"
                placeholder="Enter email"
                value={this.state.emailOrUsername}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group mt-3">
              <label style={{ paddingLeft: 2 + 'em', paddingRight: 0.5 + 'em' }}>Password</label>
              <input
                name="password"
                placeholder="Enter password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <input
                style={{ marginLeft: 7 + 'em', marginTop: 1 + 'em' }}
                type="submit"
                value="Submit"
              />
            </div>
            <p></p>
            <p></p>
          </div>
        </form>
      </div>
    );
  }
}
