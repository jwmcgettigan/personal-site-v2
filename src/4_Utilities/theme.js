//import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, pink, red, blueGrey } from '@material-ui/core/colors';
//import { color } from './color';

//! MAKE SURE I'M USING THE IDEAL THEMING PACKAGE/TOOL

const colorScheme = { // #2f495b, #366e94, #3a5c75, #2b526e
  primary: {
    50: '#e6eaee',
    100: '#bfcbd4',
    200: '#95a9b7',
    300: '#6b869a',
    400: '#4b6c84',
    500: '#2b526e',
    600: '#264b66',
    700: '#20415b',
    800: '#1a3851',
    900: '#10283f',
    A100: '#31cfff',
    A200: '#00baf3',
    A400: '#00a6da',
    A700: '#009bca',
  },
  secondary: { // #8e6e45, #e49022, #e4b322, #e8a44b, #ac7b3b
    50: '#f5efe7',
    100: '#e6d7c4',
    200: '#d6bd9d',
    300: '#c5a376',
    400: '#b88f58',
    500: '#ac7b3b',
    600: '#a57335',
    700: '#9b682d',
    800: '#925e26',
    900: '#824b19',
    A100: '#ffb296',
    A200: '#ff8459',
    A400: '#ff723f',
    A700: '#ff6630',
  }
}

// #2f495b
const primary = {
  lighter: colorScheme.primary[100],
  light: colorScheme.primary[300],
  main: colorScheme.primary[500],
  dark: colorScheme.primary[700],
  darker: colorScheme.primary[900]
}

// #8e6e45, #e49022, #e4b322
const secondary = {
  lighter: colorScheme.secondary[100],
  light: colorScheme.secondary[300],
  main: colorScheme.secondary[500],
  dark: colorScheme.secondary[700],
  darker: colorScheme.secondary[900]
}

const resume = {
  title: '#4d89ff',
  left: '#e7eaf0',
  right: '#ffffff'
}

const lightTheme = {
  palette: {
    type: 'light',
    primary: primary,
    secondary: secondary,
    background: '#ffffff',
    surface: '#e7eaf0',
    error: red,
    resume: resume,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    
  },
  styles: {
    
  }
}

const darkTheme = {
  palette: {
    type: 'dark',
    primary: primary,
    secondary: secondary,
    background: '#121212',
    surface: '#1f1f1f',
    error: red,
    resume: resume,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    
  },
  styles: {
    
  }
}

export {
  lightTheme,
  darkTheme
}

/* palette 1
2F495B
FAF7DB
84D4CC
57748A
761C33
*/

/* palette 2
42D9C8
*/

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


/*
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
*/