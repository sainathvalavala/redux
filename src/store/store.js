/*
 * STORE
 * -----
 * The store is the single object that holds the entire state of the app.
 * There is only ONE store per Redux app. It gives you three main methods:
 *   - store.getState()          -> returns the current state
 *   - store.dispatch(action)    -> sends an action to the reducers to update state
 *   - store.subscribe(listener) -> runs a function whenever the state changes
 *     (react-redux uses subscribe internally to re-render connected components)
 *
 * createStore(reducer)
 *   Creates the store. It takes the root reducer, calls it once with
 *   state = undefined so every reducer returns its initialState, and stores
 *   the result. (Modern Redux recommends configureStore from @reduxjs/toolkit,
 *   but createStore still works and is good for learning.)
 *
 * combineReducers({ ... })
 *   A store accepts only one reducer. combineReducers merges several reducers
 *   into one "root reducer". Each key becomes a slice of the state:
 *
 *     state = {
 *       counterReducer: { count: 0 },      // managed by counterReducer
 *       todoReducer:    { todos: [...] },  // managed by todoReducer
 *     }
 *
 *   When an action is dispatched, EVERY reducer receives it; each one decides
 *   whether to change its own slice or return it untouched.
 */
import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";

let store=createStore(combineReducers({counterReducer,todoReducer}))

export default store
