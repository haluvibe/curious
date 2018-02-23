import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header />", () => {
  const component = shallow(<Header />).dive();
  it("renders correctly", () => {
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  describe("when the open and close menu buttons are clicked", () => {
    it("handles openMenu click correctly", () => {
      component
        .find("WithStyles(IconButton)")
        .first()
        .simulate("click");
      expect(component.state().open).toBe(true);
    });

    it("handles closesMenu click correctly", () => {
      component
        .find("WithStyles(IconButton)")
        .at(1)
        .simulate("click");
      expect(component.state().open).toBe(false);
    });
  });
});
