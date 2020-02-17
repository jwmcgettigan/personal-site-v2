import React from 'react';
import * as Icons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import ProfilePicture from '../../../../assets/ProfilePicture.png';
import pages from '../../../../data/pages';
import './AboutMe.scss';

const PageLink = ({page}) => {
  const Icon = Icons[page.icon.type]
  return (
    <NavLink to={page.path}>
      <Icon/>
      {page.name}
    </NavLink>
  )
}

//pages.find(page => page.name === 'Resume')

const AboutMe = () => (
  <section className="about-me">
    <div className="profile">
      <h2>Justin McGettigan</h2>
      <h3>Aspiring Software Engineer</h3>
      <p>I'm an aspiring software engineer who loves learning about the cutting edge technologies that are shaping the future of our world.  
         I have strong experience developing sensor fusion and tracking algorithms.
         I believe that computer vision, machine learning, and augmented reality are the future.
        </p>
      <div className="buttons">
        <PageLink page={pages.find(page => page.name === 'Projects')}/>
        <PageLink page={pages.find(page => page.name === 'Resume')}/>
      </div>
    </div>
    <img src={ProfilePicture}/> 
  </section>
)

export default AboutMe;