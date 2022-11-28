import React, { useState, useEffect } from 'react';
import UsersTable from './AdminTable';
import axios from 'axios';
import RequestTable from './RequestTable';

export function AdminLogin() {
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
    try {
      const response = await axios.get('http://localhost:5050/requests');
      console.log(response);
      return response.data.request_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }
  async function fetchUsers() {
    try {
      const response = await axios.get('http://localhost:5050/login');
      console.log(response);
      return response.data.users_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  return (
    <div>
      <UsersTable login={login} />
      <div style={{ marginTop: 5 + 'em' }}>
        <RequestTable requests={request} />
      </div>
    </div>
  );
}
