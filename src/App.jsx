import React from 'react';
import pages from './data/pages';
import Page from './Components/Page';
import Error from './Pages/Error';
import ResumeDoc from './Pages/Resume/ResumeDoc';
import Project from './Pages/Project';

import ScrollToTop from './Components/ScrollToTop';

//import Theme from './Theme';
//import styled from 'styled-components';
import './scss/style.scss';
import projects from './data/projects';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  const html = document.documentElement;
  html.style.backgroundColor = 'theme.palette.background';

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop/>
        <Switch>
          {pages.map((page, i) => {
            const PageComponent = page.component;
            return <Route key={i} path={page.path} render={() => <Page page={<PageComponent/>} />} exact/>
          })}
          {projects.map((project, i) => (
            <Route key={i} path={"/project/" + project.name.replace(/ /g, '-').toLowerCase()}
              render={() => <Page page={ <Project project={project}/> }/> } exact/>
          ))}
          {/*
          <Route exact path="/project/:projectId" render={(props) => {
            return <Page page={Project} {...props} />
          }} />*/}
          <Route path="/printresume" component={ResumeDoc} />}/>
          <Route render={() => <Page page={Error} />}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
