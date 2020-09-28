/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';

// Import Components
import Icon from 'modules/common/Icon';

//! WIP
const Image = ({ className, icon, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const exists = props.src != null;

  const imageStyle = css`
    display: ${exists && loaded ? 'inline' : 'none'};
    box-sizing: border-box;
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  `;
  
  const iconStyle = css`
    display: ${!exists && !loaded  ? 'block' : 'none'};
    //display: block;
    padding: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(230, 230, 230);
    border: 2px dashed rgb(200, 200, 200);
    border-radius: 4px;

    svg {
      width: 100%;
      height: 100%;
      color: rgb(200, 200, 200);
    }
  `;

  return (
    <div css={css`overflow: hidden;`} className={className}>
      <img css={imageStyle} onLoad={() => setLoaded(true)} {...props}/>
      <div css={iconStyle}> 
        { icon != null && !exists && !loaded ?
          <Icon icon={icon}/>
          : <Icon icon='FaExclamationTriangle'/>
        }
      </div>
    </div>
  );
}

export default Image;