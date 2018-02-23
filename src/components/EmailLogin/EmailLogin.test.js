import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

import EmailLogin from "./EmailLogin";

test("EmailLogin component should render as expected", () => {
    const component = shallow(<EmailLogin />),
        tree = toJson(component.dive());
    expect(tree).toMatchSnapshot();
});
