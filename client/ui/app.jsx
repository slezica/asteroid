import { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import ResourceList from './resource_list'


class App extends Component {

  getResources() {
    return this.props.data.resources[this.props.routeParams.box]
  }

  render() {
    return <main>
      <ResourceList resources={ this.getResources() } />
      <pre>
        { JSON.stringify(this.props, null, 2) }
      </pre>
    </main>
  }

}

function mapState(state) {
  return { data: state }
}

export default connect(mapState)(App)
