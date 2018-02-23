/* eslint-disable react/no-multi-comp */

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Dialog, { DialogTitle, DialogContent } from "material-ui/Dialog";
import Typography from "material-ui/Typography";

const styles = {};

class AlertMessage extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render () {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">Invalid credentials</DialogTitle>
        <DialogContent>
          <Typography>Error Error Error</Typography>
        </DialogContent>
      </Dialog>
    );
  }
}

AlertMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

const AlertMessageWrapped = withStyles(styles)(AlertMessage);

export default class extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };

  render () {
    return (
      <AlertMessageWrapped
        selectedValue={this.props.error}
        open={this.state.open}
        onClose={this.handleClose}
      />
    );
  }
}
