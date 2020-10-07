//#region Imports

/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';

// Import helpers
import { color, elevate } from 'helpers';

//#endregion

/**
 * Component for making a section of content 'pop-out'.
 */
const CalloutCard = ({children, ...rest}) => {

  //#region CSS

  const style = theme => css`
    ${elevate(1)};
    border-radius: 3px;
    padding: 1rem;
    margin: 1rem 0;
    width: 100%;
    background: ${color(theme.primary.A700).setAlpha(0.2).str};
  `;

  //#endregion

  return (
    <div css={style} {...rest}>
      {children}
    </div>
  );
};

export default CalloutCard;