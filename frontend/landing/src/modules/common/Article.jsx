//#region Imports

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import helpers
import { elevate, mq, color } from 'helpers';

//#endregion

/**
 * Component for displaying the top-level layout and style of a page.
 */
const Article = ({ children, ...props }) => {

  //#region CSS

  const style = theme => css`
    background: ${theme.foreground};
    color: ${color(theme.foreground).getContrastText(15).str};
    ${elevate(1)};

    justify-self: center;
    display: grid;
    gap: 2rem;
    max-width: 50rem;
    
    padding: 0.75rem;
    ${mq('tablet-small')} { padding: 1.25rem; }
    ${mq('tablet')} { padding: 2rem 3rem; }
    ${mq('desktop')} { padding: 2rem 4rem; }

    a {
      color: ${theme.primary.A700};

      &:hover {
        text-decoration: underline;
        text-decoration-color: ${theme.primary.A700};
        cursor: pointer;
        /* color: ${theme.primary.A700} !important;
        text-decoration-color: #000; */
      }
    }
  `;

  //#endregion
  
  return (
    <article css={style} {...props}>
      {children}
    </article>
  );
};

export default Article;