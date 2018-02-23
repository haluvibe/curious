import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

import Card from "./Card";

test("Card component should render as expected", () => {
  const component = shallow(<Card />),
    tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
