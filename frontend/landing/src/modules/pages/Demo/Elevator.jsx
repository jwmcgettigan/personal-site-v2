/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components


// Import helpers
import { elevate, mq } from 'helpers';

const Elevator = ({ ...props }) => {
  const stairs = [...Array(25).keys()].slice(1);

  const elevatorStyle = css`
    display: grid;
    grid-auto-flow: row;
    margin: 1rem;
    border-radius: 2rem;
    width: min-content;
    background: rgba(177,177,177,1.0);
    ${elevate(4)};

    h2 {
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
    }

    div {

      &.light, &.dark {
        //grid-row: 2;
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(4, 1fr);
        padding: 2rem;
      }

      &.light {
        background: rgba(241,241,241,1.0);
      }
      &.dark {
        background: rgba(14,14,14,1.0);
        border-bottom-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
      }

      & > div {
        width: 5rem;
        height: 5rem;
      }

      &.dark > div {
        background: rgba(31, 35, 38, 1.0);
      }
      &.light > div {
        background: rgba(255,255,255, 1.0);
      }
    }
  `;

  return (
    <div css={elevatorStyle}>
      <h2>elevate()</h2>
      <div className="light">
        {stairs.map(stair =>
          <div key={stair} css={elevate(stair)}/>
        )}
      </div>
      <div className="dark">
        {stairs.map(stair =>
          <div key={stair} css={elevate(stair, true)}/>
        )}
      </div>
    </div>
  );
}

export default Elevator;