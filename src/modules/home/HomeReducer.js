import { combineReducers } from "redux";
import { HOME_ACTION_TYPES } from "./HomeActions";

const values = (state = [], action) => {
  switch (action.type) {
    case HOME_ACTION_TYPES.EXAMPLE_ACTION:
      return [...state, action.payload];
    default:
      return state;
  }
};

const date = (state = new Date(), action) => {
  //initialize state with today date
  switch (action.type) {
    case HOME_ACTION_TYPES.SET_DATE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  values,
  date
});
