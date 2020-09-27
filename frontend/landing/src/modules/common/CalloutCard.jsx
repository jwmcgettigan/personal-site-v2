/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';

// Import helpers
import { elevate } from 'helpers';

const CalloutCard = ({children, ...rest}) => {
  const style = theme => css`
    ${elevate(1)};
    border-radius: 3px;
    padding: 2rem;
    margin: 1rem 0;
    width: 100%;
  `;

  return (
    <div css={style} {...rest}>
      {children}
    </div>
  );
};

export default CalloutCard;