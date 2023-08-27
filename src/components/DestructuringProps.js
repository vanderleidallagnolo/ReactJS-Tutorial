import React from 'react'

const DestructuringProps = props => {

    const {gender} = props
    const {name} = props
    const {heroName} = props

    return (

<div>
    <h1>
        Hello {name} a.k.a. {heroName}
    </h1>
    {props.children}
    <p>Gender: {gender} </p>
</div>

    )
}

export default DestructuringProps;