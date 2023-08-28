import React, { Component } from 'react'

class ClassClick extends Component {
  
  clickHandler() {
    console.log("Clicked the button on the component");
  }

    render() {
    return (
      <div>
        <div>See in console</div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
