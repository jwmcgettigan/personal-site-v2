import React from 'react';
import { Button } from '../../../Components/Link';

import ProfilePicture from '../../../assets/ProfilePic1.3.png';
import pages from '../../../data/pages';
import './AboutMe.scss';

//pages.find(page => page.name === 'Resume')

const AboutMe = () => (
  <div className="title-section">
    <div className="about-me card">
      <div className="profile">
        <h2>Justin McGettigan</h2>
        <h3>Aspiring Software Engineer</h3>
        <p>
          I'm an aspiring software engineer who loves learning about the cutting edge technologies that are shaping the future of our world.  
          With strong experience developing sensor fusion and tracking algorithms,
          I believe that computer vision, machine learning, and augmented reality are the future.
        </p>
        <div className="buttons">
          <Button type="pagelink" page={pages.find(page => page.name === 'Projects')}/>
          <Button type="pagelink" page={pages.find(page => page.name === 'Resume')}/>
        </div>
      </div>
      <img src={ProfilePicture} alt="Profile"/> 
    </div>
  </div>
)

export default AboutMe;