import * as constants from "../constants/actions";

export type SetIsAuthenticatedAction = (
  name: string
) => {
  type: constants.SET_IS_AUTHENTICATED,
  payload: boolean
};

export const setIsAuthenticated: SetIsAuthenticatedAction = isAuthenticated => ({
  type: constants.SET_IS_AUTHENTICATED,
  payload: isAuthenticated
});
