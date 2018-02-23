import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

import AlertMessage from "./AlertMessage";

test("AlertMessage component should render as expected", () => {
  const component = shallow(<AlertMessage />),
    tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
