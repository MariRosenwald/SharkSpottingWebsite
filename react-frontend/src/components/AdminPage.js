import React, { useState, useEffect } from 'react';
import { Header } from './common/header/Header';
import UsersTable from './AdminTable';
import axios from 'axios';
import RequestTable from './RequestTable';
import CookieManager from './CookieManager';
import { useNavigate } from 'react-router-dom';

export function AdminPage() {
  const navigate = useNavigate();

  const [login, setLogin] = useState([]);
  useEffect(() => {
    fetchUsers().then((result) => {
      if (result) setLogin(result);
    });
  }, []);

  const [request, setRequest] = useState([]);
  useEffect(() => {
    fetchRequests().then((result) => {
      if (result) setRequest(result);
    });
  }, []);

  async function fetchRequests() {
    let email = CookieManager.getCookie("email");
    let token = CookieManager.getCookie("token");

    try {
      const response = await axios.get('http://localhost:5050/requests', {
        params: { email: email, token: token }
      });
      return response.data.request_list;
    } catch (error) {
      if (error.response.status == 401) {
        // Unauthorized, redirect to login screen
        navigate('/login', { replace: 'true' });
      }
      return false;
    }
  }

  async function fetchUsers() {
    let email = CookieManager.getCookie("email");
    let token = CookieManager.getCookie("token");

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

  return (
    <div>
      <Header />
      <UsersTable login={login} />
      <div style={{ marginTop: 5 + 'em' }}>
        <RequestTable requests={request} />
      </div>
    </div>
  );
}
