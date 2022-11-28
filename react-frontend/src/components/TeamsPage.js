import * as React from 'react';
//import axios from 'axios';
import { Header } from './common/header/Header';
import './Pages.css';
import './TeamsPage.css';
// import { PostLogin } from './PostLoginPage';
// import { AdminLogin } from './AdminPage';
export function TeamsPage() {
  return (
    <div>
      <div>
        <Header />
        <h1 className="heading">Teams</h1>
      </div>
      <div className="row">
        <div className="card">
          <div className="container">
            <h2>Drone Hardware Team</h2>
            <p className="title">Samuel Sehnert</p>
            <p className="body">
              Our team is in charge of building and maintaining the drone hardware. So far, we have
              built 2 drones, both of which have been fully tested and are working. Currently the
              team is working on designing and manufacturing some modifications for the drones to
              better test the products of the other teams.
            </p>
            {/* <p><button className="button">Contact</button></p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

//<a href="http://localhost:3000/message">Backend API endpoint.</a>

{
  /* <div>
      <Header />
      <h1 className="heading">Teams</h1>
      <div>
        <PostLogin />
      </div>
      <div style={{ paddingTop: 5 + 'em' }}>
        <AdminLogin />
      </div>
    </div> */
}
