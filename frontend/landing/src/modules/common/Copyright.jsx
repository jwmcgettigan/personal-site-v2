/** @jsx jsx */
// Imports
import { css, jsx } from '@emotion/core';

// Import Components
import Icon from 'modules/common/Icon';

// Import helpers
import { elevate, mq, bp, color } from 'helpers';

const Copyright = ({ children, ...rest }) => {

  const style = theme => css`
    display: grid;
    gap: 0.25rem;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    justify-self: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-family: Rubik, sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    color: ${color(theme.background).getContrastText(15).str};
  `;
  
  return (
    <p css={style} {...rest}>
      Copyright
      <Icon icon={'FaRegCopyright'}/>
      {(new Date().getFullYear())} Justin McGettigan
    </p>
  );
}

export default Copyright;