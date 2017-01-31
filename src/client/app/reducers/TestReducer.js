const initialState = {
  testValue: 0,
}

const TestReducer = (state = initialState, action) => {
  switch(action.type) {
    case "CHANGE_VALUE": {
      return{...state,
        testValue: action.payload,
      }
    }
  }
  return state;
}

export default TestReducer;
