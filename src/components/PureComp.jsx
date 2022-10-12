import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("this is pure comp****** this will not re-render");
    return (
      <div>
        Pure components {this.props.name} <hr />
      </div>
    )
  }
}

export default PureComp