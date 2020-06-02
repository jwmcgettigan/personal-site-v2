import React from 'react';

import Checkers from './Game/Checkers';
import Checkers3 from './Game/Checkers3';
import './Games.scss';

const Games = ({}) => (
  <main id="games">
    <Checkers3/>
    <Checkers/>
  </main>
)

export default Games;