/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { PageLink } from '../../2_Components';
import { pages } from '../../3_Data';
import { mq, zDepth } from '../../4_Utilities';

const Nav = ({ className }) => {

  const navStyle = theme => css(`
    width: max-content;
    display: grid;
    justify-self: center;
    justify-content: center;

    grid-gap: 1rem;
    margin: 0;

    a {
      font-weight: bold;
      border-radius: 3px;
      padding: 0.25rem 1rem;
      white-space: nowrap;

      width: 100%;
      font-size: 1rem;
      border: none;
      justify-content: left;
      margin: 0;
      background: none;

      svg {
        margin-right: 0.5rem;
      }
      &:hover {
        color: ${theme.palette.secondary.light};
      }
      &.active {
        color: ${theme.palette.secondary.main};
      }
    }
  `)

  return (
    <nav css={navStyle}>
      {pages.map((page, index) => <PageLink page={page} key={index} />)}
    </nav>
  )
}

export default Nav;