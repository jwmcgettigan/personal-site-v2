/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from 'react';
import { NavLink } from 'react-router-dom';

import projects from '../data/projects';
import { useTheme } from '@material-ui/core/styles';
import { bp, mq, zDepth } from '../helper';
import Section from './Section';

const projectPages = [
  {
    name: "Project One",
    image: 'phoenixhacks.svg',
    path: '/project/project-one',

  }
]

const PageCard = ({ page }) => {
  const theme = useTheme();

  const pageCardStyle = css(`
    display: grid;
    grid-template-rows: min-content auto;
    overflow: hidden;
    background: ${theme.palette.surface};
    color: ${theme.palette.getContrastText(theme.palette.background)};
    border-radius: 3px;
    ${zDepth(2)}

    &:hover {
      transition: all 0.1s ease-in-out;
      transform: scale(1.01, 1.01);
    }
  `)

  const imageStyle = css(`
    box-sizing: border-box;
    object-fit: cover;
    object-position: top;
    width: 100%;
    min-width: 16rem;
    height: 16rem;

    &:before { 
      content: " ";
      display: block;
    
      position: absolute;
      top: -10px;
      left: 0;
      height: calc(100% + 10px);
      width: 100%;
      background-color: rgb(230, 230, 230);
      border: 2px dotted rgb(200, 200, 200);
      border-radius: 5px;
    }
    
    &:after { 
      content: "";
      display: block;
      font-size: 16px;
      font-style: normal;
      font-family: FontAwesome;
      color: rgb(100, 100, 100);
      
      position: absolute;
      top: 5px;
      left: 0;
      width: 100%;
      text-align: center;
    }
  `)

  const infoStyle = css(`
    display: grid;
    grid-template-rows: min-content min-content auto;
    padding: 1rem;

    h3 {
      font-size: 1.125rem;
      //margin-bottom: 0.75rem;
      line-height: 1.2;
      font-weight: 500;
    }
  `)

  const image = require("../assets/Projects/" + page.image);

  return (
  <NavLink to={page.path} className={'nav-link'} exact>
    <div css={pageCardStyle}>
      <img css={imageStyle} src={image} alt=""/>
      <div css={infoStyle}>
        <h3>{page.name}</h3>
      </div>
    </div>
  </NavLink>
)}

const galleryStyle = css(`
  //margin: 0 -15px;
  display: grid;
  grid-gap: 3rem 2rem;
  grid-template-columns: 1fr;

  ${mq('tablet-small')} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq('desktop')} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`)

const Gallery = ({ n=-1, slider, className }) => (
  <Section css={galleryStyle} className={className}>
    {projectPages.map((page, index) => {
      if (n < 0 || index <= n-1) {
        return <PageCard key={index} page={page}/>
      }
    })}
  </Section>
)
 
export default Gallery;