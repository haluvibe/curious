//@flow
import { SET_NAME } from "../constants/actions";

export type FormState = {
  name: ?string
};

export const initialState: FormState = {
  name: null
};

export default (state: FormState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case SET_NAME:
    return {
      ...state,
      name: payload
    };
  default:
    return state;
  }
};
