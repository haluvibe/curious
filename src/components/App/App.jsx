// @flow

import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./App.css";
import { saveName } from "../../actions/form";

type Actions = {
  saveName: Function
};

type State = {
  name: string
};

export class App extends Component<Actions & State> {
  triggerSaveName = async () => {
    await this.props.saveName("Paul");
  };
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="js-btn-click-me"
          onClick={() => this.triggerSaveName()}
        >
          Click me
        </button>
        <Link to="/form">Form Page</Link>
        <Link to="/login">Login Page</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ formReducer }) => ({
    name: formReducer.name
  }),
  mapDispatchToProps: Actions = {
    saveName
  },
  enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(App);
