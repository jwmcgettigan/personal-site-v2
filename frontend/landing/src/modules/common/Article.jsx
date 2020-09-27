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
    padding: 1.25rem;
    max-width: 50rem;
    
    ${mq('tablet')} {
      padding: 2rem 4rem;
    }

    a {
      color: ${theme.primary.A700};

      &:hover {
        text-decoration: underline;
        text-decoration-color: ${theme.primary.A700};
      }
    }
  `;
  
  return (
    <section css={style} {...props}>
      {children}
    </section>
  );
}

export default Article;