import React from "react";
import { translate } from "react-i18next";
import { compose, pure } from "recompose";

const HomePage = ({ t }) => <div>{t("name")}</div>;

const enhance = compose(translate(), pure);

export default enhance(HomePage);
