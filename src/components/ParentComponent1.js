import React, { Component } from 'react'
import ChildComponent1 from './ChildComponent1'

class ParentComponent1 extends Component {

constructor(props) {
  super(props)

  this.state = {
     parentName: 'Parent'
  }

  this.greetParent1 = this.greetParent.bind(this);
}

greetParent() {

    alert(`Hello: ${this.state.parentName}`)

}



  render() {
    return (
        <>
            <div>
                <div>Without parameter</div>
                <ChildComponent1 greetHandler1={this.greetParent1} />
            </div>      
        </>
    )
  }
}

export default ParentComponent1
