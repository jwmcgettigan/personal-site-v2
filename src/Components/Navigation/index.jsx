import React from 'react';
import Link, { PageLink } from '../Link';
import Icon from '../Icon';
import SocialLinks from './SocialLinks';

import ProfilePicture from '../../assets/ProfilePic3.1.jpg';
import pages from '../../data/pages';
import './Navigation.scss';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { indigo, pink, red } from '@material-ui/core/colors';

const toggleHeader = () => {
  let rows = document.getElementsByName("navigation");
  for (let i=0; i < rows.length; i++) {
    rows[i].className = (rows[i].className === "collapsed") ? "" : "collapsed";
  }
}

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100vh',
    width: '280px',
    overflowY: 'auto',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.secondary.main)
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return <Paper elevation={3} className={classes.header} square>
    <header name="navigation" className="collapsed">
      <section className="profile">
        <div className="navbar-header">
          <button className="expander" onClick={toggleHeader}>
            <Icon icon={"FaBars"}/>
          </button>
        </div>
        <img src={ProfilePicture} alt="Profile"/>
        <h1><a href="/">Justin McGettigan</a></h1>
        <p>Artist | Developer | Engineer</p>
        <SocialLinks/>
      </section><hr/>

      <nav className="navbar">
        {pages.map((page, index) => <PageLink page={page} key={index} />)}
      </nav><hr/>

      {/*<div className="mode">
        
      </div>*/}
      <p className="copyright"><Icon icon={'FaRegCopyright'}/> {(new Date().getFullYear())} Justin McGettigan</p>
    </header>
  </Paper>
}

export default Navigation;