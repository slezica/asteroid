import React from 'react';

export default React.createClass({

  render() {
    return <ul className="resource-list">{
      this.props.resources.map(resource =>
        <li key={ resource.name }>
          { resource.amount }x { resource.name }
        </li>
      )
    }</ul>
  }

})
