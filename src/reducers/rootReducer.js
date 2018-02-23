import { combineReducers } from "redux";
import formReducer from "./formReducer";
import userReducer from "./userReducer";
// import type { FormReducer } from "./formReducer";
import type { UserReducer } from "./userReducer";

export type ReduxState = {
  // formReducer: FormReducer,
  userReducer: {}
};

export default combineReducers({
  formReducer,
  userReducer
});
