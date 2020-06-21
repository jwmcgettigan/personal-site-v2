/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from 'react';
import { NavLink } from 'react-router-dom';

import projects from '../data/projects';
import { useTheme } from 'emotion-theming';
import { bp, mq, zDepth, color } from '../utils';
import Section from './Section';

const projectPages = [
  {
    name: "Project One",
    image: require('../assets/Projects/phoenixhacks.svg'),
    path: '/project/project-one',
  }
]

const PageCard = ({ subpath, page }) => {
  const imageExists = page.image != null;
  const theme = useTheme();

  const pageCardStyle = css(`
    display: grid;
    grid-template-rows: min-content auto;
    overflow: hidden;
    background: ${theme.palette.surface};
    color: ${color(theme.palette.background).getContrastText()};
    border-radius: 3px;
    ${zDepth(2, true)}

    &:hover {
      transition: all 0.01s ease-in-out;
      ${zDepth(5, true)}
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
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgb(230, 230, 230);
      border: 2px dashed rgb(200, 200, 200);
      border-radius: 5px;
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

  return (
  <NavLink to={subpath + page.path} className={'nav-link'} exact>
    <div css={pageCardStyle}>
      <img css={imageStyle} src={imageExists ? page.image : ''} alt=""/>
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
  grid-template-columns: repeat(1, minmax(16rem, 1fr));

  ${mq('tablet-small')} {
    grid-template-columns: repeat(2, minmax(16rem, 1fr));
  }
  ${mq('desktop')} {
    grid-template-columns: repeat(3, minmax(16rem, 1fr));
  }
`)

const Gallery = ({ subpath, pages, n=-1, slider, className }) => (
  <Section css={galleryStyle} className={className}>
    {pages.map((page, index) => {
      if (n < 0 || index <= n-1) {
        return <PageCard key={index} subpath={subpath} page={page}/>
      }
    })}
  </Section>
)
 
export default Gallery;