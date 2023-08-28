import React from 'react'

const DestructuringProps = props => {

    const {gender} = props
    const {name} = props
    const {heroName} = props

    return (

<div>
    <h2>
        Hello {name} a.k.a. {heroName}
    </h2>
    {props.children}
    <p>Gender: {gender} </p>
</div>

    )
}

export default DestructuringProps;