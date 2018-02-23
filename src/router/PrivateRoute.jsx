//@flow
import * as React from "react";
import { connect, type Connector, type MapStateToProps } from "react-redux";
import { app } from "../firebase/rebase.config.js";
import { Redirect, Route } from "react-router-dom";
import * as actions from "../actions";
import type { UserReducer } from "../reducers/userReducer";

type OwnProps = {
  component: React.ComponentType<any>,
  exact: ?boolean,
  path: string
};

type StateProps = {
  isAuthenticated: boolean
} & OwnProps;

type DispatchProps = {
  setIsAuthenticated: Function
};

type Props = StateProps & DispatchProps;

export class PrivateRoute extends React.Component<Props> {
  authListener: ?Function = () => {};

  componentWillMount () {
    const { setIsAuthenticated } = this.props;
    this.authListener = app.auth().onAuthStateChanged(function (user) {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }

  componentWillUnmount () {
    this.authListener = null;
  }

  render () {
    const {
      component: Component,
      isAuthenticated,
      setIsAuthenticated,
      ...rest
    } = this.props;
    return (
      <Route
        {...rest}
        render={() => {
          return isAuthenticated ? <Component /> : <Redirect to="/login" />;
        }}
      />
    );
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = (
  state: { userReducer: UserReducer },
  ownProps
): StateProps => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  exact: ownProps.exact,
  path: ownProps.path,
  component: ownProps.component
});

const mapDispatchToProps = {
  setIsAuthenticated: actions.setIsAuthenticated
};

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(PrivateRoute);
