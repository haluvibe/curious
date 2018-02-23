import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

const MockComponent = () => {
  <div>mock</div>;
};

const mockProps = {
  isAuthenticated: false,
  exact: true,
  path: "/form",
  component: MockComponent,
  setIsAuthenticated: () => {}
};

describe("PrivateRoute", () => {
  test("component should render as expected", () => {
    const component = shallow(
        <MemoryRouter>
          <PrivateRoute {...mockProps} />
        </MemoryRouter>
      ),
      tree = toJson(component.dive().dive());
    // expect(tree).toMatchSnapshot();
    expect(tree).toMatchSnapshot();
  });
});
