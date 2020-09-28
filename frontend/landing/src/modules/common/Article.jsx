/** @jsx jsx */
// Imports
import { css, jsx } from '@emotion/core';

// Import helpers
import { elevate, mq, bp, color } from 'helpers';

const Article = ({ children, ...props }) => {

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
  
  return (
    <article css={style} {...props}>
      {children}
    </article>
  );
}

export default Article;