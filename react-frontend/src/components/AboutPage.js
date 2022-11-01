import * as React from 'react';
import { Header } from './common/header/Header';
import './Pages.css';

export function AboutPage() {
  return (
    <div>
      <Header />
      <h1 className="heading">About Us</h1>
      <img className="centered" src="resources/sharkZoom.png" alt="resources/ocean.jpg" />
      <p className="paragraph-text">
        Shark Spotting with Drones is a research project sponsored by the California Polytechnic
        State University, San Luis Obispo College of Engineering. Our project focuses on
        implementing a trained neural network to recognize and learn about sharks and other marine
        life in an effort to make the ocean safer for everyone.
      </p>
    </div>
  );
}
