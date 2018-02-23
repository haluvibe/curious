import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import Login from "./Login";
import i18n from "../localization/i18next";

test("Login component should render as expected", () => {
  const component = shallow(<Login />),
    tree = toJson(
      component
        .dive()
        .dive()
        .dive()
        .dive()
    );
  expect(tree).toMatchSnapshot();
});
