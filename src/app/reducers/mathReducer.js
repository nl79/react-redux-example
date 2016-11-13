const mathReducer = (state = {
  result: 1,
  lastValues: []
}, action) => {
  //console.log('mathReducer', action);

  switch(action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
  }
  return state;
};

export default mathReducer;