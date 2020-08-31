/** @jsx jsx */
import { css, jsx } from '@emotion/core';

//! WIP
const Image = ({ className, children: placeholder, ...props }) => {
  
  const imageStyle = css`
    box-sizing: border-box;
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  `;
  
  const placeholderStyle = css`
    display: block;
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
      {props.src != null ? 
        <img css={imageStyle} {...props}/>
        : <div css={placeholderStyle}>{placeholder}</div>
      }
    </div>
  );
}

export default Image;