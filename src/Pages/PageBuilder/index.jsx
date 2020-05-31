import React from 'react';

import './PageBuilder.scss';

export default class PageBuilder extends React.Component {
  

  render() {
    return (
      <main id="pagebuilder">

      </main>
    );
  }
}

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