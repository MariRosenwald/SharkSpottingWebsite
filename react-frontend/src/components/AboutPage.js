import * as React from 'react';

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
const img = {
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
  width: '50%',
  height: '25%'
};

const text = {
  paddingTop: '2.5%',
  textAlign: 'center',
  paddingLeft: '15%',
  paddingRight: '15%',
  fontWeight: 'bolder'
};
export function AboutPage() {
  return (
    <div>
      <h1 style={about}>About Us</h1>
      <img style={img} src="resources/sharkZoom.png" alt="resources/ocean.jpg" />
      <p style={text}>
        Shark Spotting with Drones is a research project sponsored by the California Polytechnic
        State University, San Luis Obispo College of Engineering. Our project focuses on
        implementing a trained neural network to recognize and learn about sharks and other marine
        life in an effort to make the ocean safer for everyone.
      </p>
    </div>
  );
}
