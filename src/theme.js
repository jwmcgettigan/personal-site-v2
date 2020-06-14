import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, pink, red, blueGrey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#97bff1',
      main: '#668fbe',
      dark: '#35628e'
    },
    secondary: {
      light: '#fffecb',
      main: '#ffcb9a',
      dark: '#ca9a6b'
    },
    background: blueGrey,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    
  }
})

export default theme;

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