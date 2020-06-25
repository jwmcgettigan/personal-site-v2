/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { PageLink } from '../Link';
import { useTheme } from 'emotion-theming';
import { pages } from '../../3_Data';
import { mq, zDepth } from '../../4_Utilities';

const Navbar = () => {
  const theme = useTheme();
  const navbarStyle = css(`
    //!display: flex;
    //!flex-wrap: wrap;
    //!margin: -0.25rem;
    width: max-content;
    display: grid;
    justify-self: center;
    justify-content: center;

    //${mq('tablet-wide')} {
      //display: grid;
      //justify-content: center;
      grid-gap: 1rem;
      margin: 0;
    //}

    a {
      //!font-size: 1.5rem;
      font-weight: bold;
      //border: 1px solid ${theme.palette.background};
      //!background: ${theme.palette.primary.main};
      //!${zDepth(4, true)};
      border-radius: 3px;
      padding: 0.25rem 1rem;
      //flex: 1 1 calc(20% - 5px);
      //!flex: 1 1 auto;
      white-space: nowrap;
      //!justify-content: center;
      //!margin: 0.25rem;

      // ${mq('tablet-wide')} {
        width: 100%;
        font-size: 1rem;
        border: none;
        justify-content: left;
        margin: 0;
        background: none;
        ${zDepth(0, true)};
      //}
      
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
    <nav css={navbarStyle}>
      {pages.map((page, index) => <PageLink page={page} key={index} />)}
    </nav>
  )
}

export default Navbar;