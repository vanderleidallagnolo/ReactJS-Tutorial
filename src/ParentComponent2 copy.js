import React, { Component } from 'react'
import ChildComponent2 from './ChildComponent2'

class ParentComponent2 extends Component {

constructor(props) {
  super(props)

  this.state = {
     parentName: 'Parent'
  }

  this.greetParent2 = this.greetParent2.bind(this);
}

greetParent2(childName) {

    alert(`Hello: ${this.state.parentName} from ${childName}`)

}



  render() {
    return (
        <>
            <div>
                <div>Without parameter</div>
                <ChildComponent2 greetHandler2={this.greetParent2} />
            </div>      
        </>
    )
  }
}

export default ParentComponent2
