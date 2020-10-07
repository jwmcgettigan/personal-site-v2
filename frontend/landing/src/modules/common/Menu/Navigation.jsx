//#region Imports

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { NavLink } from "react-router-dom";

// Import Components
import Icon from 'modules/common/Icon';

// Import modules
import pages from 'modules/pages';

//#endregion

/**
 * Component for displaying links to the top level
 * pages and indicating the current page.
 */
const Navigation = (props) => {

  //#region CSS

  const style = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    height: min-content;
    justify-self: center;
    width: min-content;

    a {
      display: grid;
      justify-items: center;
      align-items: center;
      text-align: center;
      padding: 0.25rem;
      border: 1px solid rgba(255,255,255,0);

      &:hover {
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.25);
      }
      &.active {
        background: none;
        border: 1px solid rgba(255,255,255,0.1);
      }
    }
    
    svg {
      display: flex;
      align-items: center;
      font-size: 2rem;
    }

    .navbar-expand-md .navbar-collapse {
        height: auto !important;
    }
  `;

  //#endregion

  //#region JSX

  return (
    <nav css={style} {...props}>
      {pages.map(page => (
        page.routeProps.path == null ? '' : (
          <NavLink key={page.name} to={page.routeProps.path} exact>
            <Icon icon={page.icon}/>
            {page.name}
          </NavLink>
      )))}
    </nav>
  );

  //#endregion

};

export default Navigation;