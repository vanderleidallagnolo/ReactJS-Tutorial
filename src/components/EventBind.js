import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message1: 'Hello',
            message2: 'Hello',
            message3: 'Hello'
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



  render() {
    return (

        <>
            <div>
                <div>EventBind - First Approach</div>
                <div>{this.state.message1}</div>
                <button onClick={this.clickHandler1.bind(this)}>Click me</button>
            </div>
            <div>
                <div>EventBind - Second Approach</div>
                <div>{this.state.message2}</div>
                <button onClick={() => this.clickHandler2()}>Click me</button>
            </div>
            <div>
                <div>EventBind - ThirdApproach</div>
                <div>{this.state.message3}</div>
                <button onClick={this.clickHandler3}>Click me</button>
            </div>
        </>
       
    )
  }
}

export default EventBind
