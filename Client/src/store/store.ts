import {createStore,compose,applyMiddleware}from "redux";
import createRootReducer from '../reducers/index'
import thunk from 'redux-thunk'
import initState from "./initState";
const middlewares = [thunk]
const store = createStore(createRootReducer,initState,compose(applyMiddleware(...middlewares)))

export default store;