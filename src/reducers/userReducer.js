//@flow
import { SET_IS_AUTHENTICATED } from "../constants/actions";

export type UserReducer = {
  isAuthenticated: boolean
};

export const initialState: UserReducer = {
  isAuthenticated: false
};

export default (state: UserReducer = initialState, { type, payload }) => {
  switch (type) {
  case SET_IS_AUTHENTICATED:
    return {
      ...state,
      isAuthenticated: payload
    };
  default:
    return state;
  }
};
