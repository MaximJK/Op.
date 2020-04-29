import React from "react";

class OpsIndex extends React.Component {

  componentDidMount() {
    debugger
    this.props.fetchOps(this.props.id)
}
  render() {


    return (
      <div>
        <div>
        your Ops
        </div>
        <div>
          make new op
        </div>
      </div>
    )
  };
}

export default OpsIndex;
