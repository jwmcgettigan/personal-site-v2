/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx, Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming';
import React, { useState, useEffect, createContext, useMemo } from 'react';
import { useAsync } from 'react-async';
//import { createState, useState } from '@hookstate/core';

import { Page, ScrollToTop, NotionPage } from './2_Components';
import { pages as staticPages, fetchFromNotion, useNotionAPI } from './3_Data';
import { Error, ResumeDoc } from './1_Pages';
import { lightTheme, darkTheme, mq, StateContext, clone } from './4_Utilities';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Pages = ({ dynamicPages }) => {
  
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        {/* Menu Pages */ }
        {staticPages.map((page, i) => {
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
                //console.log(subpage)
                return <Route key={i} path={page.subpath + subpage.path}
                render={() => <Page page={ subpage.component } renderedPage={subpage.render()}/> }  exact/>
              }
            })
          }
        })}

        {/* Resume Document */ }
        <Route path="/resume/print" component={ResumeDoc} />

        {/* 404 Page */ }
        <Route render={() => <Page page={Error} />}/>
      </Switch>
    </Router>
  )
}

const App = () => {
  const [notionConfig, setNotionConfig] = useState('2b1541f09b37490cb283993c73e1fde9')
  const notionAPI = useNotionAPI(notionConfig);
  console.log(clone(notionAPI))
  const [theme, setTheme] = useState(lightTheme);
  const fontStack = `Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`;
  const globalStyles = css(`
    * {
      margin: 0;
      position: relative;
    }
    
    a, a:hover {
      text-decoration: none;
      color: inherit;
    }

    html,
    body,
    #root {
      font: 100% ${fontStack};
      text-size-adjust: none;
      background: ${theme.palette.background};
    }

    #root {
      display: grid;
      grid-template-rows: min-content auto;
      ${mq('tablet-wide')} {
        grid-template-columns: min-content auto;
      }
    }
  `)

  const toggleTheme = () => {
    if(theme.palette.type === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }

  const stateContext = {
    notionAPI: notionAPI,
    toggleTheme: toggleTheme
  }

  return (<>
    <Global styles={globalStyles}/>
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={stateContext}>
        <Pages dynamicPages={notionAPI.data.dynamicPages} />
      </StateContext.Provider>
    </ThemeProvider>
  </>);
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