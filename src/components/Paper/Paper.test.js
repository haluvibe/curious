import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import Paper from "./Paper";

test("Paper component should render as expected", () => {
  const component = shallow(<Paper />),
    tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
