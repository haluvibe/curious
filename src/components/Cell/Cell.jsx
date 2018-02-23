import React from "react";
import Grid from "material-ui/Grid";

function Cell (props) {
  const { children, ...other } = props;

  return (
    <Grid item {...other}>
      {children}
    </Grid>
  );
}

Cell.defaultProps = {
  xs: 12
};

export default Cell;
