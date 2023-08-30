import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  
    render() {

        const {count} = this.props
        const {incrementCount} = this.props

    return (
        <button onClick={incrementCount}>Clicked {count} times</button>
    )
  }
}

export default ClickCounterTwo
