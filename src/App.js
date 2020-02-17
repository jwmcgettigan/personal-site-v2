import React from 'react';
//import pages from './data/pages';
import Page from './Components/Page';
import Error from './Pages/Error';
//import ResumeDoc from './Components/ResumeDoc';
import Home from './Pages/Home';

import './scss/style.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      {/*
      {pages.map((page) => <Route path={page.path} render={() => <Page page={page.component} />} exact/>)}
      <Route path="/print" component={ResumeDoc} />}/>*/}
      <Route path="/" render={() => <Page page={Home} />} exact/>
      <Route render={() => <Page page={Error} />}/>
    </Switch>
  </Router>
)

export default App;
