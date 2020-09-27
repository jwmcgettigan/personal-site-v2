/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';
import React from 'react';

// Consider custom overlays on the video player

const Video = ({className, ...rest}) => {
  const style = css`
    iframe {
      width: 100%;
      height: 100%;
    }
  `;

  return (
    <div css={style} className={`${className} video`}>
      <iframe {...rest}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen/>
    </div>
  );
}

export default Video;