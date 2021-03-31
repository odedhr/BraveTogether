import { createStore, compose, applyMiddleware } from "redux";
import createRootReducer from "../reducers/index";
import thunk from "redux-thunk";
import initState from "./initState";
import { composeWithDevTools } from "redux-devtools-extension";
const middlewares = [thunk];
const store = createStore(
  createRootReducer,
  initState,
  composeWithDevTools(compose(applyMiddleware(...middlewares)))
);

export default store;
