import { React, useState } from 'react';
import './LoginForm.css';
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
//import { useAuth } from '../../auth';
import { useNavigate } from 'react-router-dom';
import CookieManager from '../../CookieManager';

export function LoginForm() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === 'password') setUser({ email: user['email'], password: value });
    else setUser({ email: value, password: user['password'] });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    axios
      .get('http://localhost:5050/auth', {
        params: { email: user.email, pwd: user.password }
      })
      .then((response) => {
        console.log(response);

        // store user access token and email as cookies
        CookieManager.setCookie("token", response.data, 1);
        CookieManager.setCookie("email", user.email, 1);

        if (response.status == 200) {
          // Regular user
          navigate('/user', { replace: 'true' });
        } 
        else if (response.status == 202) {
          // Admin user
          navigate('/admin', { replace: 'true' });
        }
        
      })
      .catch((error) => {

        console.log(error);
        if (error.response === undefined) {
          alert('Could not connect to server');
        } else {
          alert(`${error.response.data}`);
        }

      });
    setUser({ email: '', password: '' });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label style={{ paddingRight: 0.5 + 'em' }}>Email address</label>
            <input
              className="forminput"
              type="text"
              name="email"
              placeholder="Enter email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label style={{ paddingLeft: 2 + 'em', paddingRight: 0.5 + 'em' }}>Password</label>
            <input
              className="forminput"
              name="password"
              placeholder="Enter password"
              type="password"
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <input
              className="inputbutton"
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
