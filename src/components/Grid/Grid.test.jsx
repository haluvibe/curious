import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

import Grid from "./Grid";

test("Grid component should render as expected", () => {
    const component = shallow(<Grid />),
        tree = toJson(component);
    expect(tree).toMatchSnapshot();
});
