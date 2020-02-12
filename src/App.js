import React from 'react';
import Resume from './Components/Resume/Resume';
import Home from './Components/Home';
import Error from './Components/Error';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/resume" component={Resume}/>
        <Route component={Error}/>
      </Switch>
    </div>
  </Router>
)

export default App;
