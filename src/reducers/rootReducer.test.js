import rootReducer from "./rootReducer";
import * as formReducer from "./formReducer";
import * as userReducer from "./userReducer";

describe("rootReducer", () => {
    it("initializes the default state", () => {
        expect(rootReducer({}, {})).toEqual({
            formReducer: formReducer.initialState,
            userReducer: userReducer.initialState
        });
    });
});
