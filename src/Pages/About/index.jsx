import React from 'react';
import AboutMe from './AboutMe';
import FeaturedProjects from './FeaturedProjects';

const About = ({ className }) => (
  <main className={className}>
    <AboutMe/>
    <FeaturedProjects/>
  </main>
)

export default About;