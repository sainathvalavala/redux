import React, { useState } from "react";
import { connect } from "react-redux";

function TodoList(props) {
  console.log("todolist rendered")
  let [newtodo, setnewtodo] = useState("");
  return (
    <div className="ml-2">
      <h2>TodoList :</h2>
      <input
        onChange={(e) => setnewtodo(e.target.value)}
        className="border rounded-md px-1 py-1 w-half"
        type="text"
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
        onClick={() => {
          props.dispatch({ type: "add_todo", payload: newtodo });
        }}
      >
        Add Todo
      </button>
      <ul>
        {props.todos.map((x) => {
          return (
            <li key={x.id} className="mt-1">
              {x.title} <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={()=>{props.dispatch({type:'del_todo',payload:x.title})}}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect((store) => {
  return store.todoReducer;
})(TodoList);
