import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

import Cell from "./Cell";

test("Cell component should render as expected", () => {
  const component = shallow(<Cell />),
    tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
