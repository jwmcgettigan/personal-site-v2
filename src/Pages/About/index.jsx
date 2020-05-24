import React from 'react';
import AboutMe from './AboutMe';
import FeaturedProjects from './FeaturedProjects';

import './About.scss';

/*
const Overview = () => (
  <section className="overview">

  </section>
)*/

const About = () => (
  <main id="about">
    <AboutMe/>
    <FeaturedProjects/>
  </main>
)

export default About;