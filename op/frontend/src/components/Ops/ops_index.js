import React from "react";

class OpsIndex extends React.Component {

  componentDidMount() {
    
    this.props.fetchOps(this.props.id)
}
  render() {
    let ops
    
    if (this.props.ops.ops) {
      ops = this.props.ops.ops.map(op => {
      return(
        <li key={op.id}>
          
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
