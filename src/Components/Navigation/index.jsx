import React from 'react';
import * as Icons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import SocialLinks from './SocialLinks';
import ProfilePicture from '../../assets/ProfilePicture.png';
import pages from '../../data/pages';
import './Navigation.scss';

const PageLink = ({page}) => {
  const Icon = Icons[page.icon.type]
  return (
    <NavLink to={page.path}>
      <Icon/>
      {page.name}
    </NavLink>
  )
}

const Navigation = () => (
  <header>
    <section className="profile">
      <h1><a href="/">Justin McGettigan</a></h1>
      <img src={ProfilePicture} alt="Profile"></img>
      <p>Hi, my name is Justin McGettigan.  I'm an aspiring software engineer currently looking for a job.  Welcome to my website!</p>
      <SocialLinks/>
    </section><hr/>

    <nav className="navbar">
      {pages.map((page, index) => <PageLink page={page} key={index} />)}
    </nav><hr/>

    <div className="mode">

    </div>
    <p className="copyright">© 2020 Justin McGettigan</p>
  </header>
)

export default Navigation;