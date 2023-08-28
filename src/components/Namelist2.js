import React from 'react'
import Person2 from './Person2';

function NameList2() {

    const names = ['Bruce', 'Clark', 'Diana']

    const nameList = names.map(name => <h2>{name}</h2>)

    const persons = [
        {
            id:  1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }

    ];
    const personList = persons.map(person => <Person2 key={person.id} person={person} />)

  return (
    <>
    <div>
     <h2>First way</h2>
      <h3>{names[0]}</h3>
      <h3>{names[1]}</h3>
      <h3>{names[2]}</h3>
    </div>
    <div>
    <h2>Second way</h2>
{

    names.map(name => <h2>{name}</h2>)

}
  </div>  
  <div>  
  <h2>Third way</h2>
{

nameList

}
  </div>  
  <div>  
  <h2>Fourth way</h2>
{

personList

}
  </div>
  </>
)
}

export default NameList2
