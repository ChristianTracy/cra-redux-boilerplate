/*
  You should use deepFreeze and clone to avoid problems if you change the state (something that you must not do it)
*/
import deepFreeze from "deep-freeze";
import clone from "clone";
import HomeReducer from "./HomeReducer";
import { HOME_ACTION_TYPES } from "./HomeActions";

const defaultState = {
  values: [],
  date: "2018-08-29T14:04:56.244Z"
};

describe("HomeReducer", () => {
  describe("values", () => {
    it("should save values on EXAMPLE_ACTION action", () => {
      const stateBefore = clone(defaultState);
      const action = {
        type: HOME_ACTION_TYPES.EXAMPLE_ACTION,
        payload: "test"
      };
      deepFreeze(stateBefore);
      deepFreeze(action);

      const stateAfter = clone(defaultState);
      stateAfter.values = ["test"];

      expect(HomeReducer(stateBefore, action)).toEqual(stateAfter);
    });
  });

  describe("date", () => {
    it("should save a new date on SET_DATE action", () => {
      const stateBefore = clone(defaultState);
      const action = {
        type: HOME_ACTION_TYPES.SET_DATE,
        payload: "2018-08-29T14:09:40.449Z"
      };
      deepFreeze(stateBefore);
      deepFreeze(action);

      const stateAfter = clone(defaultState);
      stateAfter.date = '2018-08-29T14:09:40.449Z';

      expect(HomeReducer(stateBefore, action)).toEqual(stateAfter);
    });
  });
});
