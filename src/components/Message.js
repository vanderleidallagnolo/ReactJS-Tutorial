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
                    <h2>
                    {this.state.message}
                    </h2>                    
                    <h3>
                    {this.state.other}
                    </h3>
                    <button onClick={() => this.changeMessage()}>Subscribe</button>
                </div>

            )


        }


}

export default Message;


