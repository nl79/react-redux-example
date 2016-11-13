import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

export default createStore(
  // The Reducer functions collection as an object.
  combineReducers({
  math: math,
  user: user
}),
// Empty State Object (the Default State)
{},
// Middleware Callback
  applyMiddleware(
    //myLogger,
    logger(),
    thunk,
    promise()
  ));