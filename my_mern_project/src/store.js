import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import courseSlice from './Pages/Course/addcourse.slice';
import logger from 'redux-logger'
// import userSlice from "./features/counter/users/users.slice";

const reducer = combineReducers({

course:courseSlice

});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
