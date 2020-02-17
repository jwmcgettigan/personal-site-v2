import React from 'react';
import Education from '../ResumeDoc/Education';
import Experience from '../ResumeDoc/Experience';
import Interests from '../ResumeDoc/Interests';
import Info from './Info';
import Projects from './Projects';
import Skills from '../ResumeDoc/Skills';

import resume from '../../data/resumeV2';
import './ResumeApp.scss';

const ResumeApp = () => (<>
  <div id="resume-app">
    <div className="left">
      <Info basics={resume.basics}/>
      <Education education={resume.education}/>
    </div>
    <div className="middle">
      <Skills skills={resume.skills}/>
      <Interests interests={resume.interests}/>
    </div>
    <div className="right">
      <Experience experience={resume.work}/>
    </div>
    <Projects projects={resume.publications}/>
  </div>
</>);

export default ResumeApp;