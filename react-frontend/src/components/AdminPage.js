import React, { useState, useEffect } from 'react';
import UsersTable from './AdminTable';
import axios from 'axios';

export function AdminLogin() {
  const [login, setLogin] = useState([]);
  useEffect(() => {
    fetchUsers().then((result) => {
      if (result) setLogin(result);
    });
  }, []);

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

  return <UsersTable login={login} />;
}
