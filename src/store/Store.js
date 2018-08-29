import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import home from '../modules/home/HomeReducer';

const rootReducer = combineReducers({
    home,
});

export const history = createBrowserHistory();

export const store = createStore(
  connectRouter(history)(rootReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  compose(applyMiddleware(routerMiddleware(history), thunk))
);
