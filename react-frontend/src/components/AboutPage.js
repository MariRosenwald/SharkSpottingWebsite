import * as React from 'react';
import { Header } from './common/header/Header';
import './Pages.css';
import GP from './membersImg/GroupPic.jpg'

const image = {
  width: '100%',
  height: '300px',
  
};

const centered = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white'
};

const container = {
  position: 'relative',
  textAlign: 'center'
};

export function AboutPage() {
  return (
    <div>
      <Header />
      <div className="bottomHeader">
        <div style={container}>
          <img alt="Header" src="/resources/ocean.jpg" style={image} />
          <h1 style={centered}>Drones for Marine Science and Agriculture</h1>
        </div>
      </div>
      <h1 className="heading">About Us</h1>
      <img className='centered' src={GP} alt ="GroupPic" width="400" height="300"/>
      {/* <img className="centered" src="resources/sharkZoom.png" alt="resources/ocean.jpg" /> */}
      <p className="paragraph-text">
        Shark Spotting with Drones is a research project sponsored by the California Polytechnic
        State University, San Luis Obispo College of Engineering. Our project focuses on
        implementing a trained neural network to recognize and learn about sharks and other marine
        life in an effort to make the ocean safer for everyone.
      </p>
    </div>
  );
}
