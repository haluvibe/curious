import reducer, { initialState } from "./userReducer";
import * as constants from "../constants/actions";

describe("userReducer", () => {
  it("should return the initial state", () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
  it("should handle SET_IS_AUTHENTICATED", () => {
    const isAuthenticated = true;
    const setIsAuthenticated = {
      type: constants.SET_IS_AUTHENTICATED,
      payload: isAuthenticated
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer(initialState, setIsAuthenticated)).toEqual({
      isAuthenticated: true
    });
  });
});
