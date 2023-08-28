import React from 'react'
import Person3 from './Person3';

function NameList3() {

    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']

    const nameList = names.map((name, index) => <h2> {index} - {name}</h2>)


  return (
    <>
    <div>

{

nameList

}
  </div>
  </>
)
}

export default NameList3
