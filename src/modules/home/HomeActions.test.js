/*
  This tests should be made to check if the dispatch() and getState() are called correctly
*/

import { exampleAction } from "./HomeActions";

describe("HomeActions", () => {
  let dispatch;
  let getState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  describe("exampleAction", () => {
    it("should dispatch a EXAMPLE_ACTION action", () => {
      const expectedAction = {
        type: "EXAMPLE_ACTION",
        payload: "test"
      };
      exampleAction("test")(dispatch);
      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });
});
