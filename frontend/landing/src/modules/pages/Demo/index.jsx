/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Elevator from './Elevator';
import Header from 'modules/common/Header';

//TODO: Make mobile friendly?
const Demo = ({ ...props }) => {

  return (
    <Main {...props}>
      <Header>
        <h2>Demo</h2>
      </Header>
      <Elevator/>
    </Main>
  );
}

export default {
  name: 'Demo',
  icon: 'FaTools',
  routeProps: {
    path: '/demo',
    exact: true,
    component: Demo
  }
};