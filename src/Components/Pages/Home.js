import React from 'react';

import Navigation from '../Navigation';
import Footer from '../Footer';

import './Home.scss';

const Home = () => (<>
  <Navigation/>
  <main id="home">
    <div className="home-left">
      <div id="status">
        <h2>STATUS</h2>{/* Section for what I'm currently doing / working on. */}
        <div>
          <p>Looking for a software engineering job.</p>
          <p>Researching Javascript and React.</p>
        </div>
      </div>
      <div id="recent">
        <h2>RECENT</h2>{/* Section for recent updates (to the website?). */}
        <div>
          <p>PROJECT: PhoenixHacks Live</p>
          <p>PROJECT: Renegade</p>
          <p>...</p>
        </div>
      </div>
    </div>
    <div className="home-right">
      <div id="link-library">
        <h2>LINK LIBRARY</h2>{/* Section for my recommendations. */}
        <div>Applications</div>
        <div>Packages / Libraries</div>
        <div>Tutorials</div>
        <div>People</div>
      </div>
    </div>
  </main>
  <Footer/>
</>)

export default Home;