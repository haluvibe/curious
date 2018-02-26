import React, { Component } from "react";
// import firebase from "firebase";
import { Redirect } from "react-router-dom";
import { app } from "../firebase/rebase.config";

const LoginHOCWrapper = InnerComponent =>
  class LoginHOC extends Component {
    state = {
      emailValue: "",
      passwordValue: "",
      displayNameValue: "",
      loginOrRegister: "login",
      emailError: null,
      passwordError: "",
      redirect: false
    };

    componentWillMount () {
      app
        .auth()
        .getRedirectResult()
        .then(({ user }) => {
          if (user) {
            this.setState({ redirect: true });
          }
        })
        .catch(error => {
          throw new Error(error);
        });
    }

    handleLoginWithEmailRedirect = event => {
      event.preventDefault();

      const { emailValue, passwordValue } = this.state;

      app
        .auth()
        .signInWithEmailAndPassword(emailValue, passwordValue)
        .then(({ user }) => {
          this.setState({ redirect: true });
        })
        .catch(this.authHandler);
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
          {
            this.setState({
              emailError: error.message
            });
          }
          break;
        case "auth/wrong-password":
          {
            this.setState({
              passwordError: error.message
            });
          }
          break;
        default:
          console.error(error);
        }
      }
    };

    // handleLoginWithOAuthRedirect = provider => {
    //   return provider;
    // console.log("provider", provider);
    // let firebaseProvider;
    // switch (provider) {
    // case "google": {
    //     firebaseProvider = new firebase.auth.GoogleAuthProvider();
    //     break;
    // }
    // case "twitter": {
    //     firebaseProvider = new firebase.auth.TwitterAuthProvider();
    //     break;
    // }
    // case "facebook": {
    //     firebaseProvider = new firebase.auth.FacebookAuthProvider();
    //     break;
    // }
    // case "github": {
    //     firebaseProvider = new firebase.auth.GithubAuthProvider();
    //     break;
    // }
    // default: {
    //     break;
    // }
    // }
    // app
    //     .auth()
    //     .signInWithRedirect(firebaseProvider)
    //     .then(this.authHandler);
    // };

    render () {
      const { redirect, ...rest } = this.state;
      // const providers = ["google", "twitter", "facebook", "github"];
      return redirect ?
        <Redirect to={"/form"} />
        :
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
      ;
    }
  };

export default LoginHOCWrapper;
