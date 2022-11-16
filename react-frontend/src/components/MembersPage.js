import * as React from 'react';
//import axios from 'axios';
import { Header } from './common/header/Header';
import './Pages.css';
import './MembersPage.css';
import FK from './membersImg/Franz_Kurfess.jpg'
import NW from './membersImg/Nicholas_Wachter.jpeg'
import SB from './membersImg/Shaina_Bagri.jpg'

export function MembersPage() {
  return (
    <div>
      <div>
        <Header />
        <h1 className="heading">Members</h1>
      </div>
      <div className="row">
  
    <div className="column">
      <div className="card">
        <img src={FK} alt ="Franz" width="100" />
        <div className="container">
          <h2>Franz Kurfess</h2>
          <p className="title">Professor Lead</p>
          <p>Some text that describes Kurfess</p>
          <p>fkurfess@calpoly.edu</p>
          {/* <p><button className="button">Contact</button></p> */}
        </div>
      </div>
    </div>

  <div className="column">
    <div className="card">
    <img src={NW} alt ="Nick" width="100" />
      <div className="container">
        <h2>Nicholas Wachter</h2>
        <p className="title">Student Research Assistant</p>
        <p>Some text</p>
        <p>example@example.com</p>
        {/* <p><button className="button">Contact</button></p> */}
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src={SB} alt ="Shaina" width="100" />
      <div className="container">
        <h2>Shaina Bagri</h2>
        <p className="title">Student Research Assistant</p>
        <p>Student Research Assistant</p>
        <p>example@example.com</p>
        {/* <p><button className="button">Contact</button></p> */}
      </div>
    </div>
  </div>
</div>
    </div>
    
  );
}

//<a href="http://localhost:3000/message">Backend API endpoint.</a>
