let initialState = {
  todos: ["goto Goa", "watch cricket", "eat snacks", "buy a sweater"],
};
function todoReducer(state = initialState, action) {
  if (action.type === "add_todo") {
    return { ...state, todos: [...state.todos, action.payload] };
  }
  if (action.type === "del_todo") {
    let temp=[...state.todos];
    temp.splice(action.payload,1)
    return {...state,todos: [...temp]}
  }
  return state
}
export default todoReducer;
