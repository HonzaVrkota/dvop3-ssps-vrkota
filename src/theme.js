import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#023f6b',
    },
    secondary: {
      main: '#c69211',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#eeeeee',
    },
  },
});

export default theme;
