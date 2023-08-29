import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounterEnhanced extends Component {


    

  render() {

    const { count } = this.props;
    const { incrementCount } = this.props;

    return (
      <div>
        <button onClick={incrementCount}>{this.props.name} clicked {count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounterEnhanced, 5) 
