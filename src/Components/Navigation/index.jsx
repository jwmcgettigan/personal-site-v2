import React from 'react';
import { PageLink } from '../Link';
import Icon from '../Icon';
import SocialLinks from './SocialLinks';

import ProfilePicture from '../../assets/ProfilePic3.1.jpg';
import pages from '../../data/pages';
import './Navigation.scss';

const Navigation = () => (
  <header>
    <section className="profile">
      <h1><a href="/">Justin McGettigan</a></h1>
      <img src={ProfilePicture} alt="Profile"/>
      <p>Hi, my name is Justin McGettigan.  I'm an aspiring software engineer currently looking for a job.  Welcome to my website!</p>
      <SocialLinks/>
    </section><hr/>

    <nav className="navbar">
      {pages.map((page, index) => <PageLink page={page} key={index} />)}
    </nav><hr/>

    <div className="mode">

    </div>
    <p className="copyright"><Icon icon={'FaRegCopyright'}/> 2020 Justin McGettigan</p>
  </header>
)

export default Navigation;