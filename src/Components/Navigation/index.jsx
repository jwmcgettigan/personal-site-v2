import React from 'react';
import Link, { PageLink } from '../Link';
import Icon from '../Icon';
import SocialLinks from './SocialLinks';

import ProfilePicture from '../../assets/ProfilePic3.1.jpg';
import pages from '../../data/pages';
import './Navigation.scss';

const toggleHeader = () => {
  let rows = document.getElementsByName("navigation");
  for (let i=0; i < rows.length; i++) {
    rows[i].className = (rows[i].className === "collapsed") ? "" : "collapsed";
  }
}

const Navigation = () => (
  <header name="navigation" className="collapsed">
    <section className="profile">
      <div className="navbar-header">
        <button className="expander" onClick={toggleHeader}>
          <Icon icon={"FaBars"}/>
        </button>
        <h1><a href="/">Justin McGettigan</a></h1>
      </div>
      <img src={ProfilePicture} alt="Profile"/>
      <p>Hi, my name is Justin McGettigan.  I'm an aspiring software engineer currently looking for a job.  Welcome to my website!</p>
      <SocialLinks/>
    </section><hr/>

    <nav className="navbar">
      {pages.map((page, index) => <PageLink page={page} key={index} />)}
    </nav><hr/>

    {/*<div className="mode">
      
    </div>*/}
    <p className="copyright"><Icon icon={'FaRegCopyright'}/> 2020 Justin McGettigan</p>
  </header>
)

export default Navigation;