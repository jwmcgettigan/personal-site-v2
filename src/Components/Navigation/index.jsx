import React from 'react';
 
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import './Eyeball.scss';
import SocialLinks from '../SocialLinks';
import useMightyMouse from "react-hook-mighty-mouse";

const EyeFollower = () => {
  const data = useMightyMouse(true, "ball", { x: 45, y: 45 });
  const eyeAngle = -data.selectedElement.position.angle;

  const styleEye = {
    '-webkit-transform': `rotate(${eyeAngle}deg)`,
    '-moz-transform': `rotate(${eyeAngle}deg)`,
    '-ms-transform': `rotate(${eyeAngle}deg)`,
    'transform': `rotate(${eyeAngle}deg)`
  };

  /*
  return (
    <div className="eye">
      <div id="sclera" style={styleEye}>
        <div className="iris">
          <div className="pupil">
            <div className="reflection"></div>
          </div>
        </div>
      </div>
    </div>
  )*/
  return (
    <section className="stage">
      <figure id="ball">
        <span className="shadow"></span>
        <span className="iris"></span>
      </figure>
    </section>
  )
}

const Navigation = () => (
  <header>
    <div>
      <EyeFollower/>
      <a href="/" className="logo"><h1>jwmcgettigan</h1></a> {/* Replace 'JWM' with an eye that follows the mouse cursor. */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
    {/*<SocialLinks/>*/}
  </header>
)
 
export default Navigation;