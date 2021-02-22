const defaultState = {
  count: 0
}
//reducer作用传入一个state和action返回一个新的state
export default (state=defaultState, action) => {
  if( action.type === "count_action" ) {
    console.log("count_action")
    let newState = JSON.parse(JSON.stringify(state))
    newState.count = newState.count + 1
    console.log("newState:", newState)
    return newState
  }
  return state;
}