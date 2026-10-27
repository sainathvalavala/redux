/*
 * STATE / INITIAL STATE
 * ---------------------
 * State is the data the app needs to remember (here: the count).
 * initialState is the value used the very first time, before any action
 * has been dispatched.
 */
const initialState = {
  count: 0,
};

/*
 * REDUCER
 * -------
 * A reducer is a PURE function: (currentState, action) => newState
 *   - It receives the current state and the dispatched action.
 *   - It looks at action.type to decide what changed.
 *   - It returns a NEW state object; it must never modify (mutate) the old one.
 *     That's why we use the spread operator { ...state, count: ... }.
 *     react-redux compares old vs new references to know whether to re-render.
 *   - If it doesn't recognise the action, it returns the same state unchanged.
 *   - No side effects inside a reducer (no API calls, no random values, no timers).
 *
 * `state = initialState` is a default parameter: on the first call Redux
 * passes undefined, so the reducer starts from initialState.
 */
function counterReducer(state = initialState, action) {
  console.log(action,state);
  if (action.type === "INC") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "DEC") {
    return { ...state, count: state.count - 1 };
  }
  return state;
}

export default counterReducer;
