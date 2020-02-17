import React from 'react';
import projects from '../../data/projects';
import links from '../../data/links';

import './Home.scss';

const toggle = (name) => {
  let elements = document.getElementsByName(name);
  for (let i=0; i < elements.length; i++) {
    elements[i].className = (elements[i].className === "hidden links") ? "links" : "hidden links";
  }
}

const Status = () => (
  <section id="status">
    <h2>STATUS</h2>{/* Section for what I'm currently doing / working on. */}
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
  </section>
)

const Recent = () => (
  <section id="recent">
    <h2>RECENT</h2>{/* Section for recent updates (to the website?). */}
    <div className="gallery">
      {projects.map((project, index) => {
        let color = "#"+((1<<24)*Math.random()|0).toString(16);
        return (
          <div key={index}>
            <img style={{backgroundColor: color}} alt=""/>
            <h3>{project.name}</h3>
            <p>{project.summary.substring(0, 24) + '...'}</p>
          </div>
        )
      })}
    </div>
  </section>
)

const LinkLibrary = () => (
  <section id="link-library">
    <h2>LINK LIBRARY</h2>{/* Section for my recommendations. */}
    <div className="library">
      {links.library.map((shelf) => (
        <div>
          <h3 className="title" onClick={ () => toggle(shelf.name) }>{shelf.name}</h3>
          <div name={shelf.name} className="hidden links">
            {shelf.links.map((app, index) => <a href={app.url} key={index}>{app.name}</a>)}
          </div>
        </div>
      ))}
    </div>
  </section>
)

const Home = () => (<>
  <main id="home">
    <div className="home-left">
      <Status/>
      <Recent/>
    </div>
    
    <div className="home-right">
      <LinkLibrary/>
    </div>
  </main>

</>)

export default Home;