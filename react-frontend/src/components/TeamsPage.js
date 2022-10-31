import * as React from 'react';
//import axios from 'axios';
import { Header } from './common/header/Header';

const about = {
  font: 'Arial Black',
  fontSize: '350%',
  textAlign: 'center',
  color: '#005D71',
  paddingBottom: '20px',
  borderBottom: '.25rem solid #C8A326',
  borderBottomColor: '#C8A326',
  boxShadow: '0 4px 4px -4px black',
  marginLeft: '33%',
  marginRight: '33%'
};

export function TeamsPage() {
  return (
    <div>
      <Header />
      <h1 style={about}>Teams</h1>
    </div>
  );
}

//<a href="http://localhost:3000/message">Backend API endpoint.</a>
