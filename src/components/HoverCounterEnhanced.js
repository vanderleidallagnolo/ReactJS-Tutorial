import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounterEnhanced extends Component {

  render() {

    const { count } = this.props;
    const { incrementCount } = this.props;

    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounterEnhanced)
