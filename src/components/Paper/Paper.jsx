import React from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const Cell = ({ classes, children }) => 
  <Paper className={classes.paper}>{children}</Paper>
;

Cell.defaultProps = {
  xs: 12
};

export default withStyles(styles)(Cell);
