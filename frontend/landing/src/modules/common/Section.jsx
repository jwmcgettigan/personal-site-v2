/** @jsx jsx */
// Imports
import { css, jsx } from '@emotion/core';

// Import helpers
import { elevate, mq, bp, color } from 'helpers';

const Section = ({ children, ...props }) => {

  const sectionStyle = theme => css`
    //margin: 2rem;
    margin-top: 0;
    padding: 1rem;
    //background: ${color(theme.primary.main).setAlpha(0.3).str};
    //color: ${color(theme.primary.main).getContrastText(15).getContrastText(15).str};
    background: ${theme.foreground};
    color: ${color(theme.foreground).getContrastText(15).str};
    //border-top: 3px solid ${theme.secondary.light};
    //border-left: 3px solid ${theme.secondary.light};
    //border-right: 3px solid ${theme.secondary.dark};
    //border-bottom: 3px solid ${theme.secondary.dark};
    width: 100%;
    justify-self: center;
    ${elevate(1)};

    h2 {
      font-family: 'Rubik', sans-serif;
      font-weight: 300;
    }

    ${mq('tablet')} {
      max-width: ${bp['tablet']}px;
    }
    ${mq('tablet-wide')} {
      max-width: ${bp['tablet-wide']}px;
      padding: 3rem;
    }
    ${mq('desktop')} {
      max-width: ${bp['desktop']}px;
    }
  `;
  
  return (
    <div css={sectionStyle} {...props}>
      {children}
    </div>
  );
}

export default Section;