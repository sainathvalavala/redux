import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";

let store=createStore(combineReducers({counterReducer,todoReducer}))

export default store