import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

import Router from "./Router";

test("Router component should render as expected", () => {
  const component = shallow(<Router />),
    tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
