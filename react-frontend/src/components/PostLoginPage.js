import React, { useState, useEffect } from 'react';
import DataTable from './PostLoginTable';
import axios from 'axios';
import Form from './RequestForm';
import './Pages.css';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';
import { Header } from './common/header/Header';
export function PostLogin() {
  const [data, setData] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };
  useEffect(() => {
    fetchAll().then((result) => {
      if (result) setData(result);
    });
  }, []);

  async function fetchAll() {
    try {
      const response = await axios.get('http://localhost:5050/user');
      return response.data.data_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
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
        <h1 className="heading">Welcome {auth.user}!</h1>
      </div>
      <DataTable data={data} />
      <Form handleSubmit={updateList} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
