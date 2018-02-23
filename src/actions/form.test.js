import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as constants from "../constants/actions";
import * as actions from "./form";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("creates an action to set the name", () => {
    const name = "fred";
    const expectedAction = { type: constants.SET_NAME_START, payload: name };

    expect(actions.setNameStart(name)).toEqual(expectedAction);
});

test("saveName action creator fires succesfully", () => {
    const name = "paul";
    const expectedActions = [{ type: constants.SET_NAME, payload: name }];

    const store = mockStore({ name: {} });

    return store.dispatch(actions.saveName(name)).then(() => {
    // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
    });
});
