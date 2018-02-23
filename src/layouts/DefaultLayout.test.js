import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import DefaultLayout from "./DefaultLayout";

test("DefaultLayout component should render as expected", () => {
    const component = shallow(<DefaultLayout />),
        tree = toJson(component);
    expect(tree).toMatchSnapshot();
});
