import React, { useState } from 'react';
import pages from './data/pages';
import Page from './Components/Page';
import Error from './Pages/Error';
import ResumeDoc from './Pages/Resume/ResumeDoc';
import Project from './Pages/Project';

import ScrollToTop from './Components/ScrollToTop';

import './scss/style.scss';
import projects from './data/projects';
import { ThemeProvider } from '@material-ui/core/styles';
import themeSrc from './theme';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Pages = () => (
  <Router>
    <ScrollToTop/>
    <Switch>
      {/* Menu Pages */ }
      {pages.map((page, i) => {
        const PageComponent = page.component;
        return <Route key={i} path={page.path} render={() => <Page page={<PageComponent/>} />} exact/>
      })}

      {/* Project Pages */ }
      {projects.map((project, i) => (
        <Route key={i} path={"/project/" + project.name.replace(/ /g, '-').toLowerCase()}
          render={() => <Page page={ <Project project={project}/> }/> } exact/>
      ))}

      {/* Resume Document */ }
      <Route path="/printresume" component={ResumeDoc} />

      {/* 404 Page */ }
      <Route render={() => <Page page={Error} />}/>
    </Switch>
  </Router>
)

const App = () => {
  const [theme, setTheme] = useState(themeSrc);

  const html = document.documentElement;
  html.style.backgroundColor = theme.palette.background;

  return (
    <ThemeProvider theme={theme}>
      <Pages/>
    </ThemeProvider>
  );
}

export default App;


/*
<Route exact path="/project/:projectId" render={(props) => {
  return <Page page={Project} {...props} />
}} />
*/