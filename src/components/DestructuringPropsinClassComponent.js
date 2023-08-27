import React, {Component } from 'react'


class DestructuringPropsinClassComponent extends Component{

    render() {

        const {name} = this.props
        const {heroName} = this.props

        return (
            <h1>
                Welcome {name} a.k.a {heroName}
            </h1>
        )
    }

}

export default DestructuringPropsinClassComponent;
