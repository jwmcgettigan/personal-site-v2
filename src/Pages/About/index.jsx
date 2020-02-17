import React from 'react';
import AboutMe from './Components/AboutMe';
import FeaturedProjects from './Components/FeaturedProjects';

import './About.scss';

const Overview = () => (
  <section className="overview">

  </section>
)

const About = () => (
  <main id="about">
    <AboutMe/>
    <FeaturedProjects/>
  </main>
)

export default About;