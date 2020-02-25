import React from 'react';
import pages from './data/pages';
import Page from './Components/Page';
import Error from './Pages/Error';
import ResumeDoc from './Pages/Resume/ResumeDoc';

//import Theme from './Theme';
//import styled from 'styled-components';
import './scss/style.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        {pages.map((page, i) => <Route key={i} path={page.path} render={() => <Page page={page.component} />} exact/>)}
        <Route path="/printresume" component={ResumeDoc} />}/>
        <Route render={() => <Page page={Error} />}/>
      </Switch>
    </Router>
  );
}

export default App;
