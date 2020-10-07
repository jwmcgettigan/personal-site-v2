/** @jsx jsx */
import { css, jsx } from '@emotion/core';

//TODO: Test out 'rem' instead of 'px' to try and get text size to scale with document size.

/**
 * Component for creating a Letter (US) document with the correct aspect ratio.
 */
const Document = ({ width=816, children, className }) => {
  const height = width * (11.0 / 8.5);
  const fontSize = width * (14 / 816);

  return (
    <div css={css`
      box-sizing: border-box;
      width:${width}px;
      height:${height}px;
      * {font-size: ${fontSize}px;}`} className={className}>
      {children}
    </div>
  );
}

export default Document;