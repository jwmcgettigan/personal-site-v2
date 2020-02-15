import React from 'react';
import Navigation from '../Navigation';
import Resume from './Resume';

import './_ResumePage.scss';

const ResumePage = () => (
  <div className="resume-background">
    <Navigation/>
    <main>
      <div></div>
      <Resume/>
      {/*<iframe title="PhoenixHacks Live" src="https://live.phoenixhacks.com"></iframe>*/}
      <div style={{width: "816px", backgroundColor: "#424242"}}></div>
      <div></div>
    </main>
  </div>
);

export default ResumePage;