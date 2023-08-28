import React from 'react'

function ChildComponent1(props) {
    return (
      <div>
        <button onClick={props.greetHandler1}>Greet Parent</button>
      </div>
    )
  }

  export default ChildComponent1;
