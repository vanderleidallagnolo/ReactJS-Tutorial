import React, {Component } from 'react'


class DestructuringPropsinClassComponent extends Component{

    render() {

        const {name} = this.props
        const {heroName} = this.props

        return (
            <h2>
                Welcome {name} a.k.a {heroName}
            </h2>
        )
    }

}

export default DestructuringPropsinClassComponent;
