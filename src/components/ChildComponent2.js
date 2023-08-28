import React from 'react'

function ChildComponent2(props) {
    return (
      <div>
        <button onClick={() => props.greetHandler2('some child name ')}>Greet Parent</button>
      </div>
    )
  }

  export default ChildComponent2;
