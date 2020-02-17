import React from 'react';

//import renderHTML from 'react-render-html';
//import { NavLink } from 'react-router-dom';

import ProfilePicture from '../../assets/ProfilePicture.png';
import './About.scss';

const About = () => (<>
  <main id="about">
    <img src={ProfilePicture} alt="Profile"></img>
  </main>
</>)
 
export default About;