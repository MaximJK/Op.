import React from "react";
import { Link } from 'react-router-dom';
import OpsView from './ops_view'
import OpsForm from './ops_form_container'
class OpsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      authors: '',
      medium: '',
      description: '',
      title: '',
      type: ''
  };

  }
  componentDidMount() {
    
    this.props.fetchOps(this.props.id)
}
  editOp(op) {
    this.setState(
      {modal: true,
        authors: op.authors,
        medium: op.medium,
        description: op.description,
        title: op.title,
        type: 'edit'
      }
    )
  }
  createOp() {
    this.setState(
      {modal: true,
        authors: '',
        medium: '',
        description: '',
        title: '',
        type: 'create'

      }
    )
  }

  render() {
    debugger
    let ops;
    
    if (this.props.ops.ops) {
      ops = this.props.ops.ops.map(op => {
      return(
        <div>
        <div key={op.id}>
          {op.title}
        </div>
        <OpsView
        // key={op.id}
        title={op.title}
        drafts={op.draft}
        />
        <button onClick={() => {{this.editOp(op)}}}>edit op</button>
        <button onClick={() => {{this.props.deleteOp(op.id)}}}>delete op</button>
        </div>
      );
    })}
    else {
      ops = <li></li>
    };
    let opModal;
    if (this.state.modal === false) {
    opModal = <div></div>
    } else {
    opModal = <OpsForm
    key={this.state.title}
    authors= {this.state.authors}
    medium= {this.state.medium}
    description= {this.state.description}
    title= {this.state.title}
    type= {this.state.type}
    />
    };
    return (
      
      <div>
        <div id='OpsModal'>
        {opModal}
        </div>
      <button onClick={() => {this.createOp()}}>create op</button>
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
