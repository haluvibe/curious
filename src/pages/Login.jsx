//@flow
import React, { Fragment } from "react";
import { compose, onlyUpdateForKeys } from "recompose";
import Typography from "material-ui/Typography";
import Cell from "../components/Cell/Cell";
import Card from "../components/Card/Card";
import { translate } from "react-i18next";
import EmailLogin from "../components/EmailLogin/EmailLogin";
import AlertMessage from "../components/AlertMessage/AlertMessage";
import LoginHOC from "../HOC/LoginHOC";

const Login = ({
  t,
  error,
  emailValue,
  passwordValue,
  handleEmailChange,
  handlePasswordChange,
  handleLoginWithEmailRedirect,
  emailError
}) => {
  return (
    <Fragment>
      <Cell>
        <Card style={{ position: "relative" }}>
          <div>
            <Typography variant="display1" align="center" gutterBottom>
              Curios
            </Typography>

            <Typography variant="subheading" align="center">
              {t("login_with_your_email")}
            </Typography>

            <AlertMessage messageType="error" message={error} />
            <EmailLogin
              t={t}
              emailValue={emailValue}
              passwordValue={passwordValue}
              onEmailChange={handleEmailChange}
              onPasswordChange={handlePasswordChange}
              onSubmit={handleLoginWithEmailRedirect}
              emailError={emailError}
            />
          </div>
        </Card>
      </Cell>
    </Fragment>
  );
};

const enhance = compose(
  LoginHOC,
  translate("general"),
  onlyUpdateForKeys(["emailError", "emailValue", "passwordValue"])
);

export default enhance(Login);
