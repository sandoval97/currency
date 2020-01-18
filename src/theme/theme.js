import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import { deepPurple } from '@material-ui/core/colors/deepPurple';
import { pink } from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: {main: "#0e0f1F"},
    secondary: {main: "#e91e63"},
    accent: lightBlue
  },
  status: {
    danger: 'orange',
  },
});

const LightTheme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: pink
  },
  direction: "rtl",
  status: {
    danger: 'orange',
  },
})
export default theme;

export {LightTheme};