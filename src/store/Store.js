import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import home from "../modules/home/HomeReducer";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  home,
  router: connectRouter(history)
});

const middlewares = [routerMiddleware(history), thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);
