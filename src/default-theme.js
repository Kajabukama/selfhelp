import { createMuiTheme } from '@material-ui/core/styles';
import './assets/custom-fonts.css';
export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: "#42C799",
      main: "#1dd1a1",
      dark: "#10ac84",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f1c40f",
      main: "#ff6b6b",
      dark: "#ee5253",
      contrastText: "#fff",
    }
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    htmlFontSize: 16,
    fontFamily: "'Google Sans', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  }
});
