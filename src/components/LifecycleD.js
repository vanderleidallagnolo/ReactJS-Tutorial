import React, { Component } from 'react'

class LifecyleD extends Component {


    constructor(props){
        super(props)

        this.state = {
            name: 'Vishwas'
        }

        console.log('LifecyleD constructor')
    }

    static getDerivedStateFromProps(props, state)
    {

        console.log('LifecyleD getDerivedStateFromProps')
        return null;

    }

    componentDidMount() {
        console.log('LifecyleD componentDidMount')
    }


    shouldComponentUpdate(){
        console.log('LifecycleD shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('LifecycleD getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleD componentDidUpdate');
    }



  render() {
    
    console.log('LifecyleD render')
    
    return (
      <>
      <div>
            Lifecycle D
        </div>
    </>
    )
  }
}

export default LifecyleD
