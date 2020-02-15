import React from 'react';
import Resume from './Components/Resume/Resume';
import ResumePage from './Components/Resume/ResumePage';
import Home from './Components/Home';
import Error from './Components/Error';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/resume" component={ResumePage}/>
      <Route path="/resumeprint" component={Resume}/>
      <Route component={Error}/>
    </Switch>
  </Router>
)

export default App;
