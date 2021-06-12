//#region Imports

/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';
import React from 'react';

//#endregion

//TODO: Consider custom overlays on the video player
//TODO: Behavior types: image, gif, video
//'Behavior' implies more than 'type'.

/**
 * Component wrapper for displaying a video.
 */
const Media = ({className, behavior, ...rest}) => {
  const style = css`
    
  `;

  return (
    <div css={style} className={`${className} video`}>
      
    </div>
  );
};

export default Media;