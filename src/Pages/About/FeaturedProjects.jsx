/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react';
import Gallery from '../../Components/Gallery';
import Section from '../../Components/Section';

import { useTheme } from '@material-ui/core/styles';

const FeaturedProjects = () => {
  //! CREATE A CAROUSEL VERSION OF THE GALLERY FOR THE FEATURED SECTIONS
  const theme = useTheme();

  const headerStyle = css(`
    color: ${theme.palette.getContrastText(theme.palette.background)};
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
      `}>
      <h2 css={headerStyle}>Featured Projects</h2>
      <Gallery n={6} css={css`padding: 0 !important;`}/>
    </Section>
  )
}

export default FeaturedProjects;