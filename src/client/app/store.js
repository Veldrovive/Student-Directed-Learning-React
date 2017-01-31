import {createStore, combineReducers, applyMiddleware} from 'redux'
import { routerReducer } from 'react-router-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import {loadState, saveState} from './localStorage.js'
import throttle from 'lodash/throttle'

import reducers from './reducers/index.js'

var state = reducers
//This combines my reducers so that there can be a large state
const fullReducer = combineReducers({
  state,
  routing: routerReducer
})

//These allow for more options when actions change the state
const middleware = applyMiddleware(thunk, logger(), promise())

//This uses the localStorage.js to load the state from localStorage
const persistedState = loadState();

//This actually creates the store for the app. The persistedState overrides the full reducer and adds the state from localStorage
const store = createStore(fullReducer, persistedState, middleware);

//At most every 1 second the state is saved
store.subscribe(throttle(() => {
  saveState({
    state: store.getState().state
  })
}, 1000))

//Use this to manually save the state
export function storeState(){
  saveState({
    state: store.getState().reducers
  })
}

export default store;
