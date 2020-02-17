import React from 'react';
import pages from './data/pages';
import Page from './Components/Page';
import Error from './Pages/Error';
import ResumeDoc from './Components/ResumeDoc';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      {pages.map((page) => <Route path={page.path} render={() => <Page page={page.component} />} exact/>)}
      <Route path="/print" component={ResumeDoc} />}/>
      <Route render={() => <Page page={Error} />}/>
    </Switch>
  </Router>
)

export default App;
