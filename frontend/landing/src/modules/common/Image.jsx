/** @jsx jsx */
import { css, jsx } from '@emotion/core';

//! WIP
const Image = ({ ...props }) => {
  
  return (
    <div css={containerStyle} className={className}>
      {props.src != null ? 
        <img css={imageStyle} {...props}/>
        : <div css={placeholderStyle}>{placeholder}</div>
      }
    </div>
  );
}

export default Image;