import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import Home from "./Home";
import i18n from "../localization/i18next";

test("Home component should render as expected", () => {
    const component = shallow(<Home />),
        tree = toJson(
            component
                .dive()
                .dive()
                .dive()
        );
    expect(tree).toMatchSnapshot();
});
