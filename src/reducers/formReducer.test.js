import reducer, { initialState } from "./formReducer";
import * as constants from "../constants/actions";

describe("formReducer", () => {
    it("should return the initial state", () => {
        expect(reducer(initialState, {})).toEqual(initialState);
    });
    it("should handle SET_NAME", () => {
        const name = "Paul";
        const setNameAction = {
            type: constants.SET_NAME,
            payload: name
        };
        // it's empty on purpose because it's just starting to fetch posts
        expect(reducer(initialState, setNameAction)).toEqual({ name: "Paul" });
    });
});
