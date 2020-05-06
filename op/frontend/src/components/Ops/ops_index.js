import React from "react";
import { Link } from 'react-router-dom';
import OpsView from './ops_view'
class OpsIndex extends React.Component {

  componentDidMount() {
    
    this.props.fetchOps(this.props.id)
}
  render() {
    let ops
    
    if (this.props.ops.ops) {
      ops = this.props.ops.ops.map(op => {
      return(
        <div>
        <div key={op.id}>
          {op.title}
        </div>
        <OpsView
        key={op.id}
        title={op.title}
        drafts={op.draft}
        />
        </div>
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
