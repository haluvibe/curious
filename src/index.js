import React, { Fragment } from "react";
import { render } from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import i18nextInstance from "./localization/i18next";
import Router from "./router/Router";
import store, { persistor } from "./store";
import registerServiceWorker from "./registerServiceWorker";
import "typeface-roboto";
import Reboot from "material-ui/Reboot";
import theme from "./material-ui-theme";

// Configure JSS
const rootElement = document.getElementById("root");

render(
  <I18nextProvider i18n={i18nextInstance}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Fragment>
          <Reboot />
          <MuiThemeProvider theme={theme}>
            <Router />
          </MuiThemeProvider>
        </Fragment>
      </PersistGate>
    </Provider>
  </I18nextProvider>,
  rootElement
);

registerServiceWorker();
