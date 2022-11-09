import React, { useState, useEffect } from 'react';
import DataTable from './PostLoginTable';
import axios from 'axios';

export function PostLogin() {
  const [data, setData] = useState([]);
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

  return <DataTable data={data} />;
}
