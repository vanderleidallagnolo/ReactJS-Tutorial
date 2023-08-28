import React from 'react'

const Hello = () => {

    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h2', null, 'Hello Vishwas')
    )
}

export default Hello;