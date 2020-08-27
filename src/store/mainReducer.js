/** @format */

import usersReducer from "./UserReducer";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";

export default combineReducers({
  usersState: usersReducer,
  firebase: firebaseReducer,
});
