/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from "react";
import { PageLink } from '../Link';
import { useTheme } from '@material-ui/core/styles';
import pages from '../../data/pages';
import { mq } from '../../helper';

const Navbar = () => {
  const theme = useTheme();
  const navbarStyle = css(`
    display: flex;
    flex-wrap: wrap;
    margin: -0.25rem;

    ${mq('tablet-wide')} {
      display: grid;
      justify-content: center;
      grid-gap: 1rem;
      margin: 0;
    }

    a {
      font-size: 1.5rem;
      font-weight: bold;
      border: 1px solid color(surface, on, 0.1);
      border-radius: 3px;
      padding: 0.25rem 1rem;
      //flex: 1 1 calc(20% - 5px);
      flex: 1 1 auto;
      white-space: nowrap;
      justify-content: center;
      margin: 0.25rem;

      ${mq('tablet-wide')} {
        font-size: 1rem;
        border: none;
        justify-content: left;
        margin: 0;
        background: none;
      }
      
      svg {
        margin-right: 0.5rem;
      }
      &:hover {
        color: ${theme.palette.secondary.dark};
      }
      &.active {
        color: ${theme.palette.secondary.light};
      }
    }
  `)

  return (
    <nav css={navbarStyle}>
      {pages.map((page, index) => <PageLink page={page} key={index} />)}
    </nav>
  )
}

export default Navbar;