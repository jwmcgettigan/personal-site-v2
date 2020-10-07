/** @jsx jsx */
// Imports
import { css, jsx } from '@emotion/core';

// Import helpers
import {} from 'helpers';

/**
 * Component wrapper for displaying a section of content.
 */
const Section = ({ children, ...props }) => {

  const style = theme => css`
    display: grid;
    gap: 1rem;
  `;
  
  return (
    <section css={style} {...props}>
      {children}
    </section>
  );
}

export default Section;