import React from 'react';
import Navigation from '../Navigation';
import Resume from '../Resume/Resume';
import Footer from '../Footer';

import './ResumePage.scss';

const ResumePage = () => (<>
  <Navigation/>
  <main id="resume-page">
    <Resume/>
    {/*<iframe title="PhoenixHacks Live" src="https://live.phoenixhacks.com"></iframe>
    <div style={{width: "816px", backgroundColor: "#424242"}}></div>*/}
  </main>
  <Footer/>
</>);

export default ResumePage;