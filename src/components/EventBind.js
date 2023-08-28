import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message1: 'Hello',
            message2: 'Hello',
            message3: 'Hello',
            message4: 'Hello'
        }
        this.clickHandler3 = this.clickHandler3.bind(this);

    }
    
    clickHandler1()  {
        this.setState(
            {
                message1: 'Goodbye!'
            }
        )
    }

    clickHandler2()  {
        this.setState(
            {
                message2: 'Goodbye!'
            }
        )
    }

    clickHandler3()  {
        this.setState(
            {
                message3: 'Goodbye!'
            }
        )
    }

    clickHandler4 = ()  => {
        this.setState(
            {
                message4: 'Goodbye!'
            }
        )
    }



  render() {
    return (

        <>
            <div>
                <div>EventBind - First Approach - Bad performance</div>
                <div>{this.state.message1}</div>
                <button onClick={this.clickHandler1.bind(this)}>Click me</button>
            </div>
            <div>
                <div>EventBind - Second Approach - Viable</div>
                <div>{this.state.message2}</div>
                <button onClick={() => this.clickHandler2()}>Click me</button>
            </div>
            <div>
                <div>EventBind - Third Approach</div>
                <div>{this.state.message3}</div>
                <button onClick={this.clickHandler3}>Click me</button>
            </div>
            <div>
                <div>EventBind - Fourth Approach - More effective according the the documentation</div>
                <div>{this.state.message4}</div>
                <button onClick={this.clickHandler4}>Click me</button>
            </div>
        </>
       
    )
  }
}

export default EventBind
