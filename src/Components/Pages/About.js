import React from 'react';

//import renderHTML from 'react-render-html';
//import { NavLink } from 'react-router-dom';

import Navigation from '../Navigation';
import Footer from '../Footer';
import ProfilePicture from '../../assets/ProfilePicture.png';
import './About.scss';

const About = () => (<>
  <Navigation/>
  <main id="about">
    <img src={ProfilePicture} alt="Profile Picture"></img>
  </main>
  <Footer/>
</>)
 
export default About;