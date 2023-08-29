import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {

    console.log('Pure Comp render')

    return (
      <div>
        Avoid re-renders when there is no changes in props<br />
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp
