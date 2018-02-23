// @flow
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});

const EmailLogin = ({
  t,
  classes,
  onEmailChange,
  onPasswordChange,
  emailValue,
  passwordValue,
  onSubmit,
  emailError
}) => {
  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={event => onSubmit(event)}
    >
      <div className="form__row email-login-form__row">
        <TextField
          id="email"
          label="email address"
          helperText={emailError}
          type="email"
          margin="normal"
          className={classes.textField}
          inputRef={c => this.email = c}
          error={!!emailError}
          value={emailValue}
          onChange={() => onEmailChange(this.email.value)}
        />
        <br />
        <TextField
          id="password"
          label="password"
          inputRef={c => this.password = c}
          margin="normal"
          value={passwordValue}
          type="password"
          autoComplete="current-password"
          className={classes.textField}
          onChange={() => onPasswordChange(this.password.value)}
        />
      </div>
      <div className="form__row email-login-form__row">
        <Button label="Primary" variant="raised" className={classes.button}>
          <input type="submit" value="Login" />
        </Button>
      </div>
      <div className="form__row email-login-form__row">
        <Button label="Secondary" variant="raised" className={classes.button}>
          <Link to={"/forgot-password"}>Forgot password?</Link>
        </Button>
      </div>
    </form>
  );
};

export default withStyles(styles)(EmailLogin);

EmailLogin.propTypes = {
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

EmailLogin.defaultProps = {
  emailValue: "",
  passwordValue: "",
  t: () => {},
  onEmailChange: () => {},
  onPasswordChange: () => {},
  emailValue: "",
  passwordValue: "",
  onSubmit: () => {}
};
