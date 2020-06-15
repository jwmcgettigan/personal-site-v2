/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react';
import Link, { Button } from '../../../Components/Link';
import Gallery from '../../../Components/Gallery';

import projects from '../../../data/projects';
import pages from '../../../data/pages';
//import './FeaturedProjects.scss';
import { NavLink } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const FeaturedProjects = () => {
  //! CREATE A CAROUSEL VERSION OF THE GALLERY FOR THE FEATURED SECTIONS
  const theme = useTheme();

  const headerStyle = css(`
    font-size: 2rem;
    padding-left: 1.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    line-height: 1.2;
    position: relative;
   
    &:before {
      content: "";
      display: inline-block;
      width: 5px;
      height: 100%;
      background: ${theme.palette.primary.main};
      position: absolute;
      left: 0;
      top: 0;
    }
  `)

  return <div css={css`
    display: grid;
    justify-content: center;
    `}>
    <div className="section">
      <h2 css={headerStyle}>Featured Projects</h2>
      <Gallery n={6}/>
    </div>
  </div>
}

export default FeaturedProjects;