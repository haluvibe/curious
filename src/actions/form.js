// @flow
import type { Dispatch } from "redux";
import { sleep } from "../utils/helpers";
import * as constants from "../constants/actions";

export type SetNameActions = (
  name: string
) => {
  type: string,
  payload: string
};

export type SaveName = (
  name: string
) => (dispath: Dispatch<SetNameActions>) => Promise<void>;

export const setNameStart: SetNameActions = name => ({
  type: constants.SET_NAME_START,
  payload: name
});

const setName: SetNameActions = name => ({
  type: constants.SET_NAME,
  payload: name
});

export const saveName: SaveName = name => async dispatch => {
  await sleep(1500);
  dispatch(setName(name));
  return;
};
