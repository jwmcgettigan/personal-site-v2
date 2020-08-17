/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components


// Import helpers
import { elevate, mq } from 'helpers';

const Elevator = ({ ...props }) => {
  const stairs = [...Array(25).keys()];

  const elevatorStyle = css`
    display: grid;
    justify-content: left;
    padding: 2rem;
    margin: 1rem;
    border: 1px solid black;
    width: min-content;
    background: rgba(119,119,119,1.0);

    h2 {
      text-align: center;
      grid-row: 1;
      grid-column: 1 / 3;
    }

    div {
      grid-row: 2;

      & > div {
        width: 3rem;
        height: 2rem;
      }

      &.dark > div {
        grid-column: 1;
        background: rgba(31, 35, 38, 1.0);
      }
      &.light > div {
        grid-column: 2;
        background: rgba(255,255,255, 1.0);
      }
    }
  `;

  return (
    <div css={elevatorStyle}>
      <h2>Elevator</h2>
      <div className="dark">
        {stairs.map(stair =>
          <div key={stair} css={elevate(stair, true)}>
            {stair}
          </div>
        )}
      </div>
      <div className="light">
        {stairs.map(stair =>
          <div key={stair} css={elevate(stair)}>
            {stair}
          </div>
        )}
      </div>
    </div>
  );
}

export default Elevator;