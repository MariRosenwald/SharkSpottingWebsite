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
        <div className="card">
          <div className="container">
            <h2>Fintastic RetinaNet</h2>
            <p className="title">Jonathan Serdinsky, Peter Marsh, Rachel Izenson, Tyler Herzog</p>
            <p className="body">
              Using the data and information collected by former project members, our goal is to
              train a model that is best suited for the team objective. We are using RetinaNet, an
              open source single-stage object detection model built with PyTorch, with the plan of
              improving on the accuracy of the current model. This current model is being used in
              other team projects and is implemented using YOLOv5, a different type of detection
              model. Our main focus is the detection of sharks in their natural habitat, namely
              those along the California coastline. After this new model is built, we will compare
              it to the current model to determine if there is improvement in our results.
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
