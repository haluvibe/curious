import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import Form from "./Form";

test("Form component should render as expected", () => {
    const component = shallow(<Form />),
        tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find(".title").length).toBe(1);
});
