import React, { useState, useEffect } from 'react';
import { Header } from './common/header/Header';
import FilesTable from './FilesTable';
import UsersTable from './AdminTable';
import axios from 'axios';
import CookieManager from './CookieManager';
import { useNavigate } from 'react-router-dom';

export function AdminPage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    CookieManager.eraseCookie('email');
    CookieManager.eraseCookie('token');
    navigate('/');
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers().then((result) => {
      if (result) setUsers(result);
    });
  }, []);

  const [files, setFiles] = useState([]);
  useEffect(() => {
    fetchFiles().then((result) => {
      if (result) setFiles(result);
    });
  }, []);

  async function fetchUsers() {
    let email = CookieManager.getCookie('email');
    let token = CookieManager.getCookie('token');

    try {
      const response = await axios.get('http://localhost:5050/user', {
        params: { email: email, token: token }
      });
      return response.data;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      if (error.response.status == 401) {
        // Unauthorized, redirect to login screen
        navigate('/login', { replace: 'true' });
      }
      console.log(error);
      return false;
    }
  }

  async function fetchFiles() {
    let email = CookieManager.getCookie('email');
    let token = CookieManager.getCookie('token');

    try {
      const response = await axios.get('http://localhost:5050/files', {
        params: { email: email, token: token }
      });
      return response.data;
    } catch (error) {
      if (error.response.status == 401) {
        // Unauthorized, redirect to login page
        navigate('/login', { replace: 'true' });
      } else {
        console.log(error.response.data);
      }
      return false;
    }
  }

  async function removeUser(index) {
    let email = CookieManager.getCookie('email');
    let token = CookieManager.getCookie('token');

    let emailToRemove = users[index].email;

    try {
      await axios.delete('http://localhost:5050/user', {
        data: {
          emailToRemove: emailToRemove,
          email: email,
          token: token
        }
      });
      location.reload();
    } catch (error) {
      if (!error.response) {
        console.log('Server error');
      } else if (error.response.status == 401) {
        // Unauthorized, redirect to login screen
        navigate('/login', { replace: 'true' });
      } else {
        console.log(error.response.data);
      }
    }
  }

  async function removeFile(index) {
    let email = CookieManager.getCookie('email');
    let token = CookieManager.getCookie('token');

    let fileLocation = files[index].location;

    try {
      await axios.delete('http://localhost:5050/files', {
        data: {
          location: fileLocation,
          email: email,
          token: token
        }
      });
      location.reload();
    } catch (error) {
      if (!error.response) {
        console.log('Server error');
      } else if (error.response.status == 401) {
        // Unauthorized, redirect to login screen
        navigate('/login', { replace: 'true' });
      } else {
        console.log(error.response.data);
      }
    }
  }

  const [email, setEmail] = useState('');

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    if (name == 'email') {
      setEmail(value);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let adminEmail = CookieManager.getCookie('email');
    let token = CookieManager.getCookie('token');

    try {
      await axios.post(
        'http://localhost:5050/user',
        { email: email },
        {
          params: { email: adminEmail, token: token }
        }
      );
      location.reload();
    } catch (error) {
      if (error.response.data) {
        alert(error.response.data);
      }
    }
    setEmail('');
  }

  return (
    <div>
      <Header />
      <h1 className="heading">Admin Portal</h1>
      <UsersTable users={users} removeUser={removeUser} />
      <p></p>
      <form style={{ textAlign: 'center' }} className="Auth-form" onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" value={email} onChange={handleInputChange} />

        <input type="submit" value="Add" />
      </form>
      <div style={{ marginTop: 5 + 'em' }}>
        <FilesTable files={files} admin={true} removeFile={removeFile} />
      </div>
      <button
        style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: 4 + 'rem' }}
        onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
