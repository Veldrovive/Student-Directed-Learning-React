//This imports all the reducers and combines them before exporting them to create the state
import TestReducer from './TestReducer.js'

import {combineReducers} from 'redux'

//This creates my reducers
const reducers = combineReducers({
  test: TestReducer,
})

export default reducers;
