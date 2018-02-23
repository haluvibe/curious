import * as constants from "../constants/actions";
import * as actions from "./user";

test("creates an action to set the isAuthenticated boolean", () => {
  const isAuthenticated = true;
  const expectedAction = {
    type: constants.SET_IS_AUTHENTICATED,
    payload: isAuthenticated
  };

  expect(actions.setIsAuthenticated(isAuthenticated)).toEqual(expectedAction);
});
