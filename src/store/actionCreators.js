/*
 * ACTION
 * ------
 * An action is a plain JavaScript object that describes WHAT happened.
 * It must have a `type` property (a string). It can carry extra data,
 * conventionally in a `payload` property:
 *
 *   { type: "INC" }
 *   { type: "add_todo", payload: { title: "eat cake", id: "...", status: false } }
 *
 * Actions don't change anything by themselves; they are only a message
 * that gets sent to the reducers via dispatch().
 *
 * ACTION CREATOR
 * --------------
 * A function that builds and returns an action object. It avoids typing the
 * same object (and risking typos in `type`) in many components:
 *
 *   dispatch(incCount())   is the same as   dispatch({ type: "INC" })
 */
export function  incCount(){
  return {type: "INC"}
}
export function decCount(){
  return {type: "DEC"}
}
