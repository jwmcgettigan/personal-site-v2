import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Interests from './Interests';
import Info from './Info';
import Projects from './Projects';
import Skills from './Skills';

import resume from '../../../data/resumeV2';
import './ResumeDoc.scss';

const Resume = () => (
  <article id="resume">
    <div className="left">
      <Info basics={resume.basics}/>
      <Skills skills={resume.skills}/>
      <Education education={resume.education}/>
      <Interests interests={resume.interests}/>
    </div>
    <div className="right">
      <Experience experience={resume.work}/>
      <Projects projects={resume.publications}/>
    </div>
  </article>
);

export default Resume;