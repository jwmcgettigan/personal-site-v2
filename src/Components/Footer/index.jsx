import React from 'react';
 
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import SocialLinks from '../SocialLinks';

const Footer = () => (
  <footer>
    <div>
      <p>© 2020 Justin McGettigan</p>
      <NavLink to="/">Home</NavLink><span>|</span>
      <NavLink to="/resume">Resume</NavLink><span>|</span>
      <NavLink to="/about">About</NavLink><span>|</span>
      <NavLink to="/projects">Projects</NavLink>
    </div>
    <SocialLinks/>
  </footer>
)
 
export default Footer;