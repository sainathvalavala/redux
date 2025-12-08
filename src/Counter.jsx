import React from "react";
import { connect } from "react-redux";
import { decCount, incCount } from "./store/actionCreators";
function Counter(props) {
  console.log("counter rendered")
  // console.log(props);

  return (
    <div className="m-2 p-2">
      Counter:{props.count}
      <br />
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md"
        onClick={() => {
          props.dispatch(incCount());
        }}
      >
        Increase
      </button>{" "}
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md"
        onClick={() => {
          props.dispatch(decCount());
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
