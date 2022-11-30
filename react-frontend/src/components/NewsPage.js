import React from 'react';
//import axios from 'axios';
import { Header } from './common/header/Header';
import './Pages.css';
import CP from './newsImg/CPSomethingArticle.jpg'
import MN from './newsImg/MN.jpg'
import GK from './newsImg/GK.jpg'
import Fox from './newsImg/Fox11.jpg'
import Surf from './newsImg/Surfer.jpg'

export function NewsPage() {
  return (
    <div>
      <div>
        <Header />
        <h1 className="heading">News</h1>
      </div>
      <div className="column">
      <div className="card">
        <img src={GK} alt ="GK" width="100%" />
        <div className="container">
          <h2>Mustang News: Students improve shark-spotting technology</h2>
          <a href="https://mustangnews.net/students-improve-shark-spotting-technology/">Article</a>
          {/* <p><button className="button">Contact</button></p> */}
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <img src={CP} alt ="CENG" width='100%' />
        <div className="container">
          <h2>CENG Connection: Surveilling Sharks</h2>
          <a href="https://ceng.calpoly.edu/connection/2020/09/surveilling-sharks/">Article</a>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <img src={MN} alt ="MN" width='100%' />
        <div className="container">
          <h2>Shark Spotting — Student Researchers Develop Drone and AI Tech to Protect Beachgoers</h2>
          <a href="https://www.calpoly.edu/news/shark-spotting-student-researchers-develop-drone-and-ai-tech-protect-beachgoers">Article</a>
        </div>
      </div>
    </div>
   
    <div className="column">
      <div className="card">
        <img src={Fox} alt ="Fox" width='100%' />
        <div className="container">
          <h2>Cal Poly students use artificial intelligence, drones to ‘forecast’ shark encounters</h2>
          <a href="https://keyt.com/news/san-luis-obispo-county/2020/09/17/cal-poly-students-use-artificial-intelligence-and-drones-to-forecast-shark-encounters/">Article</a>
        </div>
      </div>
    </div>


    <div className="column">
      <div className="card">
        <img src={Surf} alt ="Surf" width='100%' />
        <div className="container">
          <h2>RESEARCHERS IN CA ARE WORKING TO IDENTIFY SHARKS IN THE LINEUP USING DRONES AND AI</h2>
          <a href="https://www.surfer.com/features/ever-heard-of-shark-spotting-drones/?utm_source=postup&utm_medium=email&em_hash=da577908b04f60453c85f9c64e91638a">Article</a>
        </div>
      </div>
    </div>


    </div>
  );
}
