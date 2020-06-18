import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, pink, red, blueGrey } from '@material-ui/core/colors';

//! MAKE SURE I'M USING THE IDEAL THEMING PACKAGE/TOOL

const bluish = {
  50: '#e2eced',
  100: '#b8d1d1',
  200: '#88b2b3',
  300: '#589394',
  400: '#357b7d',
  500: '#116466',
  600: '#0f5c5e',
  700: '#0c5253',
  800: '#0a4849',
  900: '#053638',
  A100: '#30ffc0',
  A200: '#00f1a8',
  A400: '#00d896',
  A700: '#00c98b'
};

const orangish = {
  50: '#fff9f3',
  100: '#ffefe1',
  200: '#ffe5cd',
  300: '#ffdbb8',
  400: '#ffd3a9',
  500: '#ffcb9a',
  600: '#ffc692',
  700: '#ffbe88',
  800: '#ffb87e',
  900: '#ffac6c',
  A100: '#ffffff',
  A200: '#ffffff',
  A400: '#ffffff',
  A700: '#ffffff'
};


const lightTheme = createMuiTheme({
  palette: {
    type: 'light',/*
    primary: {
      light: '#97bff1',
      main: '#668fbe',
      dark: '#35628e'
    },
    secondary: {
      light: '#fffecb',
      main: '#ffcb9a',
      dark: '#ca9a6b'
    },*/
    primary: {
      light: bluish[200],
      main: bluish[500],
      dark: bluish[800]
    },
    secondary: {
      light: orangish[200],
      main: orangish[500],
      dark: orangish[800]
    },
    navigation: indigo,
    background: '#ffffff',
    surface: '#e7eaf0',
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    
  },
  styles: {
    
  }
})

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',/*
    primary: {
      light: '#97bff1',
      main: '#668fbe',
      dark: '#35628e'
    },
    secondary: {
      light: '#fffecb',
      main: '#ffcb9a',
      dark: '#ca9a6b'
    },*/
    primary: {
      light: bluish[200],
      main: bluish[500],
      dark: bluish[800]
    },
    secondary: {
      light: orangish[200],
      main: orangish[500],
      dark: orangish[800]
    },
    navigation: indigo,
    background: '#111821',
    surface: '#151e29',
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    
  },
  styles: {
    
  }
})

export {
  darkTheme
}
export default lightTheme;

/*
?What themes do I want?
 - light theme
 - dark theme
 - primary colors that can be changed separately from the themes


?What considerations must I take when designing my website?
  - Layout
  - Color
    - Primary
    - Secondary
    - Error
    - Background
  - Typography
  - Iconography
  - Shape
  - Components
  - Motion

?What content do I want on my website?
  - Resume
    - Current Generic
    - Dev Generic
    - Versions tailored toward certain jobs: 
      - software engineer, data engineer, software developer
  - Project Portfolio
*/