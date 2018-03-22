import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../components/Loading/Loading";
import * as actions from "../actions";
import { app } from "../firebase/rebase.config";
import { Redirect } from "react-router-dom";

const LoginHOCWrapper = InnerComponent => {
  class LoginHOC extends Component {
    state = {
      emailValue: "",
      passwordValue: "",
      displayNameValue: "",
      loginOrRegister: "login",
      emailError: null,
      passwordError: "",
      redirect: false,
      loading: false
    };

    handleLoginWithEmailRedirect = event => {
      event.preventDefault();

      const { emailValue, passwordValue } = this.state;
      this.setState({ loading: true });
      app
        .auth()
        .signInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
          this.props.setIsAuthenticated(true);
          this.setState({ loading: false });
        })
        .catch(error => {
          throw new Error(error);
          this.setState({ loading: false });
        });
    };

    handleEmailChange = emailValue => {
      this.setState({
        emailValue,
        emailError: null
      });
    };

    handlePasswordChange = passwordValue => {
      this.setState({
        passwordValue
      });
    };

    handleDisplayNameChange = displayNameValue => {
      this.setState({
        displayNameValue
      });
    };

    authHandler = error => {
      if (error) {
        const label = error.code
          .replace("/", "_")
          .replace(new RegExp("-", "g"), "_");

        switch (error.code) {
        case "auth/user-not-found":
        case "auth/invalid-email":
          this.setState({
            emailError: error.message
          });
          break;
        case "auth/wrong-password":
          this.setState({
            passwordError: error.message
          });
          break;
        default:
          throw new Error(error);
        }
      }
    };

    // handleLoginWithOAuthRedirect = provider => {
    //   return provider;
    //   console.log("provider", provider);
    //   let firebaseProvider;
    //   switch (provider) {
    //   case "google": {
    //     firebaseProvider = new firebase.auth.GoogleAuthProvider();
    //     break;
    //   }
    //   case "twitter": {
    //     firebaseProvider = new firebase.auth.TwitterAuthProvider();
    //     break;
    //   }
    //   case "facebook": {
    //     firebaseProvider = new firebase.auth.FacebookAuthProvider();
    //     break;
    //   }
    //   case "github": {
    //     firebaseProvider = new firebase.auth.GithubAuthProvider();
    //     break;
    //   }
    //   default: {
    //     break;
    //   }
    //   }
    //   app
    //     .auth()
    //     .signInWithRedirect(firebaseProvider)
    //     .then(this.authHandler);
    // };

    render () {
      const { loading, ...rest } = this.state;
      const { isAuthenticated } = this.props;

      if (isAuthenticated) {
        return <Redirect to={"/form"} />;
      }
      if (loading) {
        return <Loading />;
      }
      // const providers = ["google", "twitter", "facebook", "github"];
      return (
        <InnerComponent
          {...this.props}
          {...rest}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleDisplayNameChange={this.handleDisplayNameChange}
          handleLoginWithEmailRedirect={this.handleLoginWithEmailRedirect}
          authHandler={this.authHandler}
          // handleLoginWithOAuthRedirect={this.handleLoginWithOAuthRedirect}
          // providers={providers}
        />
      );
    }
  }
  const mapStateToProps = store => ({
    isAuthenticated: store.userReducer.isAuthenticated
  });

  return connect(mapStateToProps, actions)(LoginHOC);
};

export default LoginHOCWrapper;
