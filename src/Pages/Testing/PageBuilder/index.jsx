/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { bp, mq, zDepth } from '../../../utils';

import React from 'react';

const PageBuilder = ({ className }) => {
  
  return (
    <main className={className}>
      
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