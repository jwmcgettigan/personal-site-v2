import React from 'react';
import Link, { Button } from '../../../Components/Link';
import Gallery from '../../../Components/Gallery';

import projects from '../../../data/projects';
import pages from '../../../data/pages';
import './FeaturedProjects.scss';
import { NavLink } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: '2rem',
    paddingLeft: '1.5rem',
    fontWeight: 700,
    marginBottom: '3rem',
    lineHeight: 1.2,
    position: 'relative',
    '&:before': {
      content: "''",
      display: 'inline-block',
      width: '5px',
      height: '100%',
      background: theme.palette.primary.main,
      position: 'absolute',
      left: 0,
      top: 0,
    }
  }
}));

const FeaturedProjects = () => {
  //! CREATE A CAROUSEL VERSION OF THE GALLERY FOR THE FEATURED SECTIONS
  const classes = useStyles();
  const styles = {
    section: {
      display: 'grid',
      justifyContent: 'center'
    }
  }

  return <div style={styles.section}>
    <div className="section">
      <h2 className={classes.header}>Featured Projects</h2>
      <Gallery n={6}/>
    </div>
  </div>
}

export default FeaturedProjects;