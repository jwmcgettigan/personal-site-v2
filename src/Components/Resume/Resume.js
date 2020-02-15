import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Interests from './Interests';
import Info from './Info';
import Projects from './Projects';
import Skills from './Skills';

import resume from '../../data/resumeV2';
import './Resume.scss';

const Resume = () => (
  <div id="resume">
    <div className="left">
      <Info basics={resume.basics}/><br/>
      <Skills skills={resume.skills}/><br/>
      <Education education={resume.education}/><br/>
      <Interests interests={resume.interests}/>
    </div>
    <div className="right">
      <Experience experience={resume.work}/><br/>
      <Projects projects={resume.publications}/>
    </div>
  </div>
);

export default Resume;