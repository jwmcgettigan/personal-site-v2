import React from 'react';

import Navigation from '../Navigation';
import Footer from '../Footer';
import projects from '../../data/projects';
import links from '../../data/links';

import './Home.scss';

const Home = () => (<>
  <Navigation/>
  <main id="home">
    <div className="home-left">
      <div id="status">
        <div className="title">
          <h2>STATUS</h2>{/* Section for what I'm currently doing / working on. */}
        </div>
        <div className="dashboard">
          <div>
            <h3>Career</h3>
            <p>Looking for a software engineering job.</p>
          </div>
          <div>
            <h3>Education</h3>
            <p>Researching Javascript and React.</p>
          </div>
        </div>
      </div>
      <div id="recent">
        <div className="title">
          <h2>RECENT</h2>{/* Section for recent updates (to the website?). */}
        </div>
        <div className="gallery">
          {projects.map((project) => {
            let color = "#"+((1<<24)*Math.random()|0).toString(16);
            return (
              <div>
                <img style={{backgroundColor: color}}></img>
                <h3>{project.name}</h3>
                <p>{project.summary.substring(0, 24) + '...'}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    <div className="home-right">
      <div id="link-library">
        <div className="title">
          <h2>LINK LIBRARY</h2>{/* Section for my recommendations. */}
        </div>
        <div className="library">
          <div>
            <h3 className="title">Applications</h3>
            <div className="links">
              {links.library.applications.map((app) => <a href={app.url}>{app.name}</a>)}
            </div>
          </div>
          <div>
            <h3 className="title">Packages / Libraries</h3>
            <div className="links">
              {links.library["packages/libraries"].map((app) => <a href={app.url}>{app.name}</a>)}
            </div>
          </div>
          <div>
            <h3 className="title">Tutorials</h3>
            <div className="links">
              {links.library.tutorials.map((app) => <a href={app.url}>{app.name}</a>)}
            </div>
          </div>
          <div>
            <h3 className="title">People</h3>
            <div className="links">
              {links.library.people.map((app) => <a href={app.url}>{app.name}</a>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer/>
</>)

export default Home;