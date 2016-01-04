'use strict'

import Immutable, { Map } from 'immutable';

// =============================================================================
// REDUX SETUP
// =============================================================================

import { createStore } from 'redux'


const store = createStore(function reducer(state, update) {
  console.log(update);

  if (! state)
    return Immutable.fromJS({ movies: {} })
  else if (update.value)
    return state.setIn(['movies', update.id], update.value)
  else
    return state.deleteIn(['movies', update.id])
})

store.subscribe(() => console.log(store.getState().toJS()))


// =============================================================================
// SOCKET.IO SETUP
// =============================================================================

const socket = require('socket.io-client')()

socket.on('ACTION', action => {
  store.dispatch(action)
})


// =============================================================================
// REACT SETUP
// =============================================================================

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import Router, { Route } from 'react-router'


function App(props) {
  return <main>
    <ul>{
      props.movies.valueSeq().map(movie =>
        <li key={ movie.id }>
          { movie.title }
        </li>
      )
    }</ul>
  </main>
}


function mapState(state) {
  return { movies: state.get('movies') }
}


const ConnectedApp = connect(mapState)(App)


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={ ConnectedApp } />
    </Router>
  </Provider>,

  document.getElementById('app')
)
