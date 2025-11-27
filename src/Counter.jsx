import React from "react";
import { connect } from "react-redux";
function Counter(props) {
  console.log(props);
  return (
    <div className="m-2 p-2">
      Counter:{props.count}
      <br />
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md"
        onClick={() => {
          props.dispatch({ type: "INC" });
        }}
      >
        Increase
      </button>{" "}
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md"
        onClick={() => {
          props.dispatch({ type: "DEC" });
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default connect((store) => {
  return store.counterReducer;
})(Counter);
