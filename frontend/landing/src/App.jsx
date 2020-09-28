/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Import modules
import pages from 'modules/pages';
import projectpages from 'modules/pages/Projects';

// Import documents
import Basic from 'modules/pages/Resume/Basic';

// Import themes
import { lightTheme } from 'setup/theme';

const font = (name, path) => css`
  @font-face {
    font-family: ${name};
    src: url(${path});
  }
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  //const fontStack = `Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`;
  const globalStyles = css`
    // Import fonts
    @import url(https://fonts.googleapis.com/css2?family=Roboto);
    @import url(https://fonts.googleapis.com/css2?family=Rubik);

    * {
      margin: 0;
      position: relative;
      box-sizing: border-box;
    }
    
    a, a:hover {
      text-decoration: none;
      color: inherit;
    }

    html,
    body,
    #root {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      height: 100%;
      /* background-image:
      repeating-linear-gradient(rgba(255, 220, 232, 0.1) 0 1px, transparent 1px 100%),
      repeating-linear-gradient(90deg, rgba(255, 220, 232, 0.1) 0 1px, transparent 1px 100%);
      background-size: 8px 8px; */
    }
  `

  return (
    <>
      <Global styles={globalStyles}/>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/resume/basic" component={Basic} exact/>
            {projectpages.map(page => (
              <Route {...page.routeProps} key={page.name}/>
            ))}
            {pages.map(page => (
              <Route {...page.routeProps} key={page.name}/>
            ))}
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
