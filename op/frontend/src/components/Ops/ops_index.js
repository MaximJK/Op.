import React from "react";

class OpsIndex extends React.Component {

  componentDidMount() {
    debugger
    this.props.fetchOps(this.props.id)
}
  render() {
    let ops
    debugger
    if (this.props.ops.ops) {
      ops = this.props.ops.ops.map(op => {
      return(
        <li>
          {op.title}
        </li>
      )
    })}
    else {
      ops = <li></li>
    }

    return (
      <div>
        <div>
        your Ops
        </div>
        <div>
          <ul>
          {ops}
          </ul>
        </div>
      </div>
    )
  };
}

export default OpsIndex;
