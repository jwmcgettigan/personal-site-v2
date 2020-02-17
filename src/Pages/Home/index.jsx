import React from 'react';
import Navigation from './Components/Navigation';
import AboutMe from './Components/AboutMe';
import FeaturedProjects from './Components/FeaturedProjects';

import './Home.scss';

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

const Footer = () => (
  <footer>
  </footer>
)

const Home = () => (<>
  <Navigation/>
  <About/>
</>)

export default Home;