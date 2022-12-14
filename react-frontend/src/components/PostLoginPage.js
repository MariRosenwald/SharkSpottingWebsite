import React, { useState, useEffect } from 'react';
import FilesTable from './FilesTable';
import axios from 'axios';
import Form from './RequestForm';
import './Pages.css';
import { useNavigate } from 'react-router-dom';
import { Header } from './common/header/Header';
import CookieManager from './CookieManager';
export function PostLogin() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const handleLogout = () => {
    CookieManager.eraseCookie('email');
    CookieManager.eraseCookie('token');
    navigate('/');
  };
  useEffect(() => {
    fetchAll().then((result) => {
      if (result) setFiles(result);
    });
  }, []);

  async function fetchAll() {
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

  function updateList(request) {
    makePostCall(request);
  }

  async function makePostCall(request) {
    try {
      const response = await axios.post('http://localhost:5050/requests', request);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <div>
      <div>
        <Header />
        <h1 className="heading">Welcome {CookieManager.getCookie('email')}!</h1>
      </div>
      <FilesTable files={files} admin={false} />
      <Form handleSubmit={updateList} />
      <button
        className='inputbuttontables'
        style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: 11 + 'rem' }}
        onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
