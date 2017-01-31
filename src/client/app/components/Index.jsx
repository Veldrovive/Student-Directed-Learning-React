//The base for the whole app. Provider allows components to access the store.
//SyncHistoryWithStore and RouterReducer from 'react-router-redux' allow the store to hold the location.
//connect allows this component to access the store.

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {connect} from 'react-redux'

import store from '../store.js'

import styles from './_Index.css'

import {Header} from './BasePage'

import {changeValue} from '../actions'

@connect((store) => {
  return{
    all: store.state
  }
})
class App extends React.Component {
  constructor(){
    super();

    this.render = this.render.bind(this);
    this.testAction = this.testAction.bind(this)
  }

  testAction(){
    var newValue = this.props.all.test.testValue + 1
    this.props.dispatch(changeValue(newValue))
  }

  render () {
    console.log(this.props.all.test.testValue)
    return(
      <div className={styles.mainPage}>
        <Header />
        <div className={styles.mainContent}>
          <div className={styles.spacer}></div>
          <div className={styles.pageContent}>
            <h1 onClick={this.testAction}>Welcome to a test!</h1>
            <p>Sup</p>
          </div>
          <div className={styles.spacer}></div>
        </div>
      </div>
    )
  }
}

//React Router renders the page along with providing a history
const history = syncHistoryWithStore(browserHistory, store)
render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
) , document.getElementById('app'));
