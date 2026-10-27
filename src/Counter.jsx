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
      {/*
        DISPATCH
        --------
        dispatch(action) is the ONLY way to change Redux state.
        Flow:  click -> dispatch(action) -> store runs the reducers
               -> new state is saved -> connected components re-render.
        connect() injects dispatch as props.dispatch when no
        mapDispatchToProps is given.
      */}
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

/*
 * CONNECT (from react-redux)
 * -------
 * connect(mapStateToProps, mapDispatchToProps)(Component)
 * is a Higher-Order Component: it wraps Counter and returns a new component
 * that is "connected" to the store.
 *
 * mapStateToProps (the first argument, the arrow function below)
 *   Receives the whole state (named `store` here, but it's really the state
 *   object from store.getState()) and returns the part this component needs.
 *   Whatever it returns is merged into props. Here it returns
 *   state.counterReducer = { count }, so we can use props.count.
 *   The component re-renders only when this returned data changes.
 *
 * mapDispatchToProps (optional second argument)
 *   Lets you pass ready-made functions as props, e.g.
 *     connect(mapState, { incCount, decCount })(Counter)
 *   then call props.incCount() instead of props.dispatch(incCount()).
 *   If omitted (like here), you get props.dispatch instead.
 *
 * Modern alternative: hooks inside the component
 *   const count = useSelector((state) => state.counterReducer.count);
 *   const dispatch = useDispatch();
 */
export default connect((store) => {
  return store.counterReducer;
})(Counter);
