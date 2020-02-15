import React from 'react';
import Resume from './Components/Resume/Resume';
import ResumePage from './Components/Pages/ResumePage';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import Error from './Components/Pages/Error';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/resume" component={ResumePage}/>
      <Route path="/resumeprint" component={Resume}/>
      <Route path="/projects" component={Projects} exact/>
      <Route path="/about" component={About} exact/>
      <Route component={Error}/>
    </Switch>
  </Router>
)

export default App;
