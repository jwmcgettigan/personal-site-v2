import React, { useState, useEffect, createContext } from 'react';
//import { createState, useState } from '@hookstate/core';

import { pages as staticPages } from './data';
import Page from './Components/Page';
import Error from './Pages/Error';
import ResumeDoc from './Pages/Resume/ResumeDoc';
import ScrollToTop from './Components/ScrollToTop';

import './scss/style.scss';
//import { projects } from './data';
//import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'emotion-theming';
import { lightTheme, darkTheme } from './utils';
import { fetchFromNotion } from './pageData';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const StateContext = createContext();

const Pages = ({ dynamicPages }) => {
  //const [pages, setPages] = useState(pageData);
  //const [dynamicPages, setDynamicPages] = useState([]);
  //const [projects, setProjects] = useState([]);
  /*
  useEffect(() => {
    (async () => {
      const fetchedPages = await fetchFromNotion();
      setDynamicPages(fetchedPages);
    })()
  }, [])*/
  
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        {/* Menu Pages */ }
        {staticPages.map((page, i) => {
          //const PageComponent = page.component;
          return <Route key={i} path={page.path} render={() => <Page page={page.component}/>} exact/>
        })}

        {/* Testing Pages */ }
        {staticPages.map((page, i) => {
          if(page.subpages != null) {
            return page.subpages.map((subpage, i) => {
              if(subpage != null) {
                return <Route key={i} path={page.subpath + subpage.path}
                render={() => <Page page={ subpage.component }/> }  exact/>
              }
            })
          }
        })}

        {/* Project Pages */ }
        {dynamicPages.map((page, i) => {
          if(page.subpages != null) {
            return page.subpages.map((subpage, i) => {
              if(subpage != null) {
                return <Route key={i} path={page.subpath + subpage.path}
                render={() => <Page page={ subpage.component } renderedPage={subpage.renderedPage}/> }  exact/>
              }
            })
          }
        })}

        {/* Resume Document */ }
        <Route path="/printresume" component={ResumeDoc} />

        {/* 404 Page */ }
        <Route render={() => <Page page={Error} />}/>
      </Switch>
    </Router>
  )
}

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [dynamicPages, setDynamicPages] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedPages = await fetchFromNotion();
      setDynamicPages(fetchedPages);
      setProjects(fetchedPages[0].subpageData);
    })()
  }, [])

  const html = document.documentElement;
  html.style.backgroundColor = theme.palette.background;//theme.palette.primary.light;

  const toggleTheme = () => {
    if(theme.palette.type === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }

  const stateContext = {
    projects: projects,
    toggleTheme: toggleTheme
  }

  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={stateContext}>
        <Pages dynamicPages={dynamicPages} />
      </StateContext.Provider>
    </ThemeProvider>
  );
}

export default App;


/*
<Route exact path="/project/:projectId" render={(props) => {
  return <Page page={Project} {...props} />
}} />
*/

{/*projects.map((project, i) => (
    <Route key={i} path={"/project/" + project.name.replace(/ /g, '-').toLowerCase()}
      render={() => <Page page={ <Project project={project}/> }/> } exact/>
  ))*/}