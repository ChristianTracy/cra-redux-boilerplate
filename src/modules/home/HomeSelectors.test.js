import clone from "clone";
import { valuesSelector, todaySelector } from "./HomeSelectors";

const defaultState = {
  home: {
    values: [],
    date: new Date("2018-08-29T14:20:55.068Z")
  }
};
describe("valuesSelector", () => {
  it('should return "values" data ', () => {
    let state = clone(defaultState);
    state.home.values = ["test", "test"];
    expect(valuesSelector(state)).toEqual(["test", "test"]);
  });
});

describe("todaySelector", () => {
  it("should return day number (29)", () => {
    let state = clone(defaultState);
    expect(todaySelector(state)).toEqual(29);
  });
});
