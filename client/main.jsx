import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router, { Route } from 'react-router';

import App from './ui/app'
import store from './store/store'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={ App } />
    </Router>
  </Provider>,

  document.getElementById('app')
)
