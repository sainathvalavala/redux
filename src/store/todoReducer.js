import { v4 as uuidv4 } from "uuid";
uuidv4();
let initialState = {
  todos: [
    { title: "goto goa", id: uuidv4(), status: false },
    { title: "play cricket", id: uuidv4(), status: false },
    { title: "bring chicken", id: uuidv4(), status: false },
    { title: "eat cake", id: uuidv4(), status: false },
    { title: "goto goa", id: uuidv4(), status: false },
  ],
};
function todoReducer(state = initialState, action) {
  if (action.type === "add_todo") {
    return { ...state, todos: [...state.todos, action.payload] };
  }
  if (action.type === "del_todo") {
    let temp = state.todos.filter(todo=>todo.id!==action.payload)
    return {...state,todos:[...temp]}
    // let temp = [...state.todos];
    // temp.splice(action.payload, 1);
    // return { ...state, todos: [...temp] };
  }
  return state;
}
export default todoReducer;
