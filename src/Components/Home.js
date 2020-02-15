import React from 'react';

import Navigation from './Navigation';
import PDF from './Resume_PDF/Resume_PDF';

const App = () => (<>
  <Navigation/>
  <main>
    <div className="home-left">
      <PDF/>
    </div>
    <div className="home-right">
      <div>
        <h2>My Experience...</h2>
      </div>
      <div>
        <h2>My Projects...</h2>
      </div>
    </div>
  </main>
  <footer></footer>
</>)

export default App;