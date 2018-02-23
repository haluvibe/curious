import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import App from "../components/App/App";
import FormPage from "../pages/Form";
import LoginPage from "../pages/Login";
import DefaultLayout from "../layouts/DefaultLayout";

export default () => 
  <BrowserRouter>
    <DefaultLayout>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={LoginPage} />
        <PrivateRoute path="/form" exact component={FormPage} />
      </Switch>
    </DefaultLayout>
  </BrowserRouter>
;
