import React from 'react';
 
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import SocialLinks from './SocialLinks';

const Navigation = () => (
  <header>
    <div>
      <a href="/"><h1>JWM</h1></a> {/* Replace 'JWM' with an eye that follows the mouse cursor. */}
      <NavLink to="/">Home</NavLink><span>|</span>
      <NavLink to="/resume">Resume</NavLink><span>|</span>
      <NavLink to="/projects">Projects</NavLink><span>|</span>
      <NavLink to="/about">About</NavLink>
    </div>
    <SocialLinks/>
  </header>
)
 
export default Navigation;