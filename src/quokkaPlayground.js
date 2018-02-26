import { createMuiTheme } from "material-ui/styles";
import pink from "material-ui/colors/pink";

const theme = createMuiTheme({
  palette: {
    primary: pink
  },
  typography: {
    display1: {
      marginBottom: "20px"
    }
  }
});

export default theme;
