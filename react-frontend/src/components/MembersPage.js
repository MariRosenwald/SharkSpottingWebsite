import * as React from 'react';
//import axios from 'axios';
import { Header } from './common/header/Header';
import './Pages.css';
import './MembersPage.css';
import FK from './membersImg/Franz_Kurfess.jpg'
import NW from './membersImg/Nicholas_Wachter.jpeg'
import SB from './membersImg/Shaina_Bagri.jpg'
import RI from './membersImg/Rachel_Izenson.jpg'
import SS from './membersImg/Samuel_Sehnert.jpg'
import JR from './membersImg/Jake_Roth.jpeg'
import SM from './membersImg/Franz_Kurfess.jpg'

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
          <h2>Franz J. Kurfess</h2>
          <p className="title">Professor Lead</p>
          <p>Franz J. Kurfess joined the Computer Science Department of California Polytechnic State University in the summer of 2000, after a short stay with Concordia University in Montreal, Canada, and a longer stay with the New Jersey Institute of Technology. Before that, he spent some time at the University of Ulm, Germany, as a Postdoc at the International Computer Science Institute in Berkeley, CA, and at the Technical University in Munich, where he obtained his M.S. and Ph.D. in Computer Science. 
            
            In addition to his faculty position at Cal Poly, he was the interim chair for the Computer Science and Software Engineering department in 2016-2017, and the chair of the Academic Senate Committee on Research, Scholarly and Creative Activities from 2007-2014. He is the coordinator of the Human-Computer Interaction lab, and teaches courses in the areas of Artificial Intelligence, Knowledge-Based Systems, User-Centered Design and Development, and Human-Computer Interaction. He is currently leading research projects on Drones for Marine Science and Agriculture, AI for Search and Rescue, AI for All, and Ethics and Social Justice Assessment for AI and Data Science Activities.  </p>
          <p>Instigator and Principal Investigator of the Shark Spotting and later Drones for Marine Science and Agriculture projects. Working on real-time, on-board object recognition, classification and tracking with drones. </p>
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
        <p>I was on the machine learning team during winter and spring quarter of 2022. After I graduated in the spring, I have since continued my work in machine learning as a machine learning engineer for Epic Systems. When I’m not working I love playing volleyball, rock climbing, and hanging out with friends.</p>
        <p>While on the team I trained a new model to detect sharks, people, and boats. Then I used that model in creating a real time tracking system for shark spotting activities.</p>
        <p>nawachter50@gmail.com</p>
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
        <p>I am a 4th year Computer Science major specializing in Artificial Intelligence/Machine Learning while also pursuing a Math minor. I will be graduating in June 2023. The majority of my AI/ML experience lies in Natural Language Processing; however, I have been exploring the field of Computer Vision through projects such as this and a few others I have been working on.</p>
        <p>I am working on two different projects for the team. One is using the YOLOv7 object detection model to detect, track, and distinguish individual cows in video footage taken from drones. I am doing this as my senior project with the goal of being able to create a model that can analyze herd behavior of the cows. The other is a collaboration with other students from CSC 480 to use the YOLOv7 object detection model for detecting sharks throughout a video feed.</p>
        <p>shainabagri@gmail.com</p>
        {/* <p><button className="button">Contact</button></p> */}
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src={RI} alt ="Rachel" width="100" />
      <div className="container">
        <h2>Rachel Izenson</h2>
        <p className="title">Student Research Assistant</p>
        <p>I am a 4th year computer science major and a software developer on the shark spotting project! In my free time I love to try new recipes and hike Bishops peak.</p>
        <p>I am currently working on training a model using RetinaNet and labeled images to measure the accuracy differences compared to our current model. </p>
        <p>rjizenson@gmail.com</p>
        {/* <p><button className="button">Contact</button></p> */}
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src={SS} alt ="Sam" width="100" />
      <div className="container">
        <h2>Samuel Sehnert</h2>
        <p className="title">Student Research Assistant</p>
        <p>I am a 4th year Computer Engineering student who is currently working on the drone hardware for the team.</p>
        <p>In the previous year, the hardware team managed to build and test both the drone hardware, and the communications system between the drone and a ground control station. This year, since the drone hardware is mostly complete, I have been focusing on designing and manufacturing modifications for the drones.</p>
        <p>ssehnert@calpoly.edu</p>
        {/* <p><button className="button">Contact</button></p> */}
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src={JR} alt ="Jake" width="100" />
      <div className="container">
        <h2>Jake Roth</h2>
        <p className="title">Student Research Assistant</p>
        <p>I am a fourth year marine science student with an interest in shark populations and behavior.</p>
        <p>I am assisting with the creation of a game engine</p>
        <p>Jake1@roth-family.net</p>
        {/* <p><button className="button">Contact</button></p> */}
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src={SM} alt ="Sierra" width="100" />
      <div className="container">
        <h2>Sierra Martin</h2>
        <p className="title">Student Research Assistant</p>
        <p>My name is Sierra Martin, I’m from Santa Cruz County. I am in my 5th and final year at Cal Poly, about to finish with my B.S. in Environmental Management and Protection with a Minor in GIS in the Fall! Growing up along the central coast,  I have built a  passion for ecosystem management and behavioral ecology.   Throughout my time at Cal Poly I’ve contributed to a few different Marine Science research Labs including Needles Otter Lab and Team Ellie, I currently do GHG analysis for Cal Fire! I also recently received my my Pt.107 - FAA Drone License to conduct aerial surveys (and for fun - I love taking pictures of my buddies surfing on the side)! </p>
        <p>I’ll be helping with gathering the specific permits and approvals for our flights, as well as building my flight skills to aid in piloting the surveys! Currently we are in the beginning steps of understanding and acquiring such permits to get flight clearance! </p>
        <p>sierramartin222@gmail.com</p>
        {/* <p><button className="button">Contact</button></p> */}
      </div>
    </div>
  </div>

</div>
    </div>
    
  );
}

//<a href="http://localhost:3000/message">Backend API endpoint.</a>
