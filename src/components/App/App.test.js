import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import { App } from "./App";

describe("<App />", () => {
  const mockSaveName = jest.fn();

  const props = {
    name: "Paul",
    saveName: mockSaveName
  };
  const app = shallow(<App {...props} />);

  it("renders correctly", () => {
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });

  it("handles the button click", () => {
    app.find(".js-btn-click-me").simulate("click");
    expect(mockSaveName).toHaveBeenCalled();
  });
});
