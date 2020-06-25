/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { Section } from '../../../2_Components';
import { bp, mq, zDepth, color } from '../../../4_Utilities';

import React from 'react';

/*
  @param foreground: Color Object
  @param background: Color Object
*/
const ContrastList = ({ background, className }) => {
  //! Show different font sizes and weights
  const contrastList = []
  for(let i = 1; i <= 21; i++) {
    contrastList.push('ContrastText of ' + i.toString());
  }

  const contrastListStyle = theme => css(`
    background: ${background.toString()};
    padding: 1rem;
    border: 2px solid ${background.getContrastText(10)};
    width: max-content;
    h2 {
      padding: 0.5rem;
      background: grey;
      //color: ${background.getContrastText()};
      //border-bottom: 2px solid ${background.getContrastText(10)};
      text-align: center;
      ${zDepth(1)}

      span {
        padding: 0.1rem 0.25rem;
      }
    }
  `)

  const foregroundStyle = css(`
    background: ${background.getContrastText()};
    color: ${background.getContrastText().getContrastText(5)};
  `)
  const backgroundStyle = css(`
    background: ${background}; 
    color: ${background.getContrastText(5)};
    ${zDepth(-1)}
  `)

  return (
    <div css={contrastListStyle}>
      <h2>
        <span css={foregroundStyle}>
          {background.getContrastText().hex}
        </span>
        {' on '}
        <span css={backgroundStyle}>
          {background.hex}
        </span>
      </h2>
      {contrastList.map((v, i) => {
        return (
          <h3 key={i} css={css(`
          color: ${background.getContrastText(i+1)};
          padding-left: 0.5rem;
          border-left: 3rem solid ${background.getContrastText(i+1)};
          font-weight: 500;
          `)}>
            {v}
          </h3>
        )
      })}
    </div>
  )
}

const PageBuilder = ({ className }) => {
  const contrastListsStyle = css(`
    display: flex;
  `)
  
  return (
    <main className={className}>
      <div css={contrastListsStyle}>
        <ContrastList background={color('#000000')}/>
        <ContrastList background={color('#ffffff')}/>
        <ContrastList background={color('#ff347f')}/>
        <ContrastList background={color('#00ffbb')}/>
      </div>
    </main>
  );
}

export default PageBuilder;

/*
const PageBuilder = () => (
  <main id="pagebuilder">
  </main>
)

export default PageBuilder;*/

/*

!NOTES

?Definitions
Block(Component): A piece/section of content. 
Document(Page): A collection of blocks.

?Requirements
-------------
* Nested blocks.
* Modes
* Realtime CSS/HTML editing
* Clean data format

?Modes
------
Layout: Can drag and drop blocks.
Text: Can edit text inside of blocks.
Style: Can edit the source css of a block (which may affect other blocks).
Structure: Can edit the source HTML of a block. Mostly for editing classes.
*/