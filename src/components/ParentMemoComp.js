import React, { Component } from 'react'
import MemoComp from './MemoComp'

class ParentMemoComp extends Component {

constructor(props) {
  super(props)

  this.state = {
     name : 'Vishwas'
  }
}


  render() {

    console.log('******************* Parent Comp render ****************************')

    return (
      <div>
        Parent Component for Memo Example
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentMemoComp
