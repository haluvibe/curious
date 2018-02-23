import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function CenteredGrid (props) {
  const { classes, children } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {children}
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
