import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import { app } from "./__mock__/rebase.config";
import LoginHOC from "./LoginHOC";

describe("LoginHOC", () => {
  const Component = LoginHOC(() => <div>hello world</div>);
  const wrapper = shallow(<Component />);
  const mockEvent = { preventDefault: jest.fn() };

  afterEach(() => {
    wrapper.setState({ redirect: false });
  });

  it("render its child wrapper render with props", () => {
    const tree = toJson(wrapper);
    expect(Object.keys(wrapper.props()).length > 5).toEqual(true);
    expect(tree).toMatchSnapshot();
  });

  it("sets redirect state to true if user is logged in", () => {
    wrapper.instance().handleLoginWithEmailRedirect(mockEvent);
    expect(app.auth().signInWithEmailAndPassword).toHaveBeenCalled();
  });
});
