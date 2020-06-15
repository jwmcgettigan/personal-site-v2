import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  dark: {
    primary: {
      base: '#4d89ff',
      light: '#70a0ff',
      dark: '#3d6dcc',
      on: '#ffffff'
    },
    surface: {
      base: '#1e2a3a',
      light: '#2f435c',
      dark: '#151e29',
      on: '#ffffff'
    },
    background: {
      base: '#111821',
      on: '#ffffff'
    }
  },
  light: {
    primary: {
      base: '#54b689',
      light: '#76c4a0',
      dark: '#43916d',
      on: '#ffffff'
    },
    surface: {
      base: '#54b689',
      light: '#2f435c',
      dark: '#fafafa',
      on: '#4f4f4f'
    },
    background: {
      base: '#ffffff',
      on: '#000000'
    }
  }
}

const Theme = ({ children }) => {
  //const [isDark, setToDark] = useState(false);
  return (
    <ThemeProvider theme={theme.dark}>{children}</ThemeProvider>
  );
}

export default Theme;