/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext, useEffect, useState } from 'react';
import { Gallery, Section } from '../../2_Components';

import { useTheme } from 'emotion-theming';
import { color, StateContext, clone } from '../../4_Utilities';

const print = (notionAPI) => {
  console.log(notionAPI)
  //console.log(isLoading)
  //console.log(projectPages)
  //console.log('PROJECT PAGES: ' + JSON.stringify(projectPages[0]))
  return JSON.stringify(notionAPI)//isLoading ? 'LOADING...' : 'LOADED!'
}

let isLoaded = false;
const FeaturedProjects = ({ className }) => {
  //! CREATE A CAROUSEL VERSION OF THE GALLERY FOR THE FEATURED SECTIONS
  const notionAPI = useContext(StateContext).notionAPI;
  const headerStyle = theme => css(`
    color: ${color(theme.palette.background).getContrastText()};
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

  return (
    <Section css={css`
      display: grid;
      justify-content: center;
      `} className={className}>
      <h2 css={headerStyle}>Featured Projects</h2>
      { notionAPI.isLoading ? <div>Loading ...</div>
      : <Gallery subpath={'/project'} pages={notionAPI.data.projectPages}
      n={6} css={css`padding: 0 !important;`}/> }
    </Section>
  )
}

export default FeaturedProjects;