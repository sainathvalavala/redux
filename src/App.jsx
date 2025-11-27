import React from "react";
import Counter from "./Counter";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="border-2 border-red-500 m-3 p-3 font-weight-400">
      App
      <div className=" border-3 border-green-600">
    <Counter/>
      </div>
      <div className=" border-3 border-blue-600 mt-4 p-3">
    <TodoList/>
      </div>
    </div>
  );
}

export default App;
