import Immutable, { Map } from 'immutable';
import { createStore } from 'redux'

const initialState = {
  resources: {
    self: [{
      name: 'Agua',
      amount: 1
    }]
  }
}


const actions = {
  addResource(state, resource) {

  }
}


function reducer(state, action) {
  // if (! state) return initialState
  // return state
  return Immutable.fromJS(initialState)
}


export default createStore(reducer)
