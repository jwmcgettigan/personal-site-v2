import React from 'react';
 
import { NavLink } from 'react-router-dom';
import './_Navigation.scss';
import SocialLinks from './SocialLinks';

const Navigation = () => (
  <header>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/resume">/Resume</NavLink>
    </div>
    <SocialLinks/>
  </header>
)
 
export default Navigation;