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

// Import documents
import Basic from 'modules/pages/Resume/Basic';

// Import themes
import { lightTheme } from 'setup/theme';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  //const fontStack = `Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`;
  const globalStyles = css`
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
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
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
