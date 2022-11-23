import { React, useState } from 'react';
import './LoginForm.css';
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useAuth } from '../../auth';
import { useNavigate } from 'react-router-dom';

export function LoginForm2() {
  const [user, setUser] = useState({
    emailOrUsername: '',
    password: ''
  });
  const auth = useAuth();
  const navigate = useNavigate();

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === 'password') setUser({ emailOrUsername: user['emailOrUsername'], password: value });
    else setUser({ emailOrUsername: value, password: user['password'] });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    axios
      .get('http://localhost:5050/auth', {
        params: { email: user.emailOrUsername, pwd: user.password }
      })
      .then((response) => {
        console.log(response);
        alert(`Authenticated: ${response.data}`);
        if (response.data == true) {
          auth.login(user.emailOrUsername);
          navigate('/user', { replace: 'true' });
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response === undefined) {
          alert(`Error: ${error.response}`);
        } else {
          // client never received a response
          alert('Could not connect to server');
        }
      });
    setUser({ emailOrUsername: '', password: '' });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label style={{ paddingRight: 0.5 + 'em' }}>Email address</label>
            <input
              type="text"
              name="emailOrUsername"
              placeholder="Enter email"
              value={user.emailOrUsername}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label style={{ paddingLeft: 2 + 'em', paddingRight: 0.5 + 'em' }}>Password</label>
            <input
              name="password"
              placeholder="Enter password"
              type="password"
              value={user.password}
              onChange={handleInputChange}
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
