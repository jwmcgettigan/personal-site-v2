/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import ThemeToggle from './ThemeToggle';
import Copyright from './Copyright';

const Footer = ({ className }) => {

  const footerStyle = css(`
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: auto repeat(2, min-content);
    justify-content: center;
    align-items: end;
    hr {
      margin: 0;
    }
  `)

  return (
    <footer css={footerStyle} className={className}>
      <ThemeToggle/>
      <hr/>
      <Copyright/>
    </footer>
  )
}

export default Footer;