import React from 'react'

function FunctionClick() {

    function clickHandler()
    {
        console.log("Button clicked");
    }

  return (
    <div>
      <div>See in console</div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
