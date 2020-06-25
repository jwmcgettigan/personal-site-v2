/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Image = ({ image, alt, className, children: placeholder }) => {
  const imageExists = image != null;
  const imageStyle = css(`
    box-sizing: border-box;
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  `)
  const containerStyle = css(`
    overflow: hidden;
  `)
  const placeholderStyle = css(`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(230, 230, 230);
    border: 2px dashed rgb(200, 200, 200);
    border-radius: 5px;

    svg {
      width: 100%;
      height: 100%;
      color: rgb(200, 200, 200);
    }
  `)
  
  return (
    <div css={containerStyle} className={className}>
      {imageExists ? <img css={imageStyle} src={image} alt={alt}/> : <div css={placeholderStyle}>{placeholder}</div>}
    </div>
  )
}

export default Image;