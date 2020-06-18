import React, { useState, useEffect } from 'react';
import staticPages from './data/staticPages';
import Page from './Components/Page';
import Error from './Pages/Error';
import ResumeDoc from './Pages/Resume/ResumeDoc';
import Project from './Pages/Project';

import ScrollToTop from './Components/ScrollToTop';

import './scss/style.scss';
import projects from './data/projects';
import { ThemeProvider } from '@material-ui/core/styles';
import lightTheme, { darkTheme } from './theme';
import { fetchFromNotion } from './pageData';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { dark } from '@material-ui/core/styles/createPalette';

const Pages = ({ toggleTheme }) => {
  //const [pages, setPages] = useState(pageData);
  const [dynamicPages, setDynamicPages] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedPages = await fetchFromNotion();
      setDynamicPages(fetchedPages);
    })()
  }, [])
  
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        {/* Menu Pages */ }
        {staticPages.map((page, i) => {
          //const PageComponent = page.component;
          return <Route key={i} path={page.path} render={() => <Page page={page.component} toggleTheme={toggleTheme} />} exact/>
        })}

        {/* Testing Pages */ }
        {staticPages.map((page, i) => {
          if(page.subpages != null) {
            return page.subpages.map((subpage, i) => {
              if(subpage != null) {
                return <Route key={i} path={page.subpath + subpage.path}
                render={() => <Page page={ subpage.component } toggleTheme={toggleTheme} /> }  exact/>
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
                render={() => <Page page={ subpage.component } renderedPage={subpage.renderedPage} toggleTheme={toggleTheme} /> }  exact/>
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

  const html = document.documentElement;
  html.style.backgroundColor = theme.palette.background;//theme.palette.primary.light;

  const toggleTheme = () => {
    if(theme.palette.type === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Pages toggleTheme={toggleTheme} />
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