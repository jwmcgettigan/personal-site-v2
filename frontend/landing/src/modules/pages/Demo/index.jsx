/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import Main from 'modules/common/Main';
import Elevator from './Elevator';

//TODO: Make mobile friendly?
const Demo = ({ ...props }) => {

  return (
    <Main {...props}>
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