import React, { Component } from 'react'

function fAtualizaContadorNoConsole(contador)
{
    console.log(contador);

    document.getElementById('btCount').innerHTML = "Increment " + contador;
}

class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    increment(){
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () =>
        //     fAtualizaContadorNoConsole(this.state.count)
        // );

        this.setState( (prevState, props) => (
            {
                count: prevState.count + 1
            }
           
        ) );

   
        
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }


  render() {
    return (
        <div>      
            <div>
                Count - {this.state.count}
            </div>
            <button id="btCount" onClick={() => this.incrementFive()}>Increment - {this.state.count}</button>
      </div>

    )
  }
}

export default Counter
