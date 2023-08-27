import React, { Component } from 'react'

class Message extends Component
{

        constructor()
        {
            super()
            this.state = {
                message: 'Welcome visitor',                
                other: 'Feel at home'
            }

        }

        changeMessage(){
            this.setState({
                message: 'Thank you for subscribing',
                other: 'God bless you'
        });

        }

        render() {
            return (
                
                <div>
                    <h1>
                    {this.state.message}
                    </h1>                    
                    <h2>
                    {this.state.other}
                    </h2>
                    <button onClick={() => this.changeMessage()}>Subscribe</button>
                </div>

            )


        }


}

export default Message;


