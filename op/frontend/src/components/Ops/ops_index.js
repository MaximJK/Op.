import React from "react";
import { Link } from 'react-router-dom';
import OpsLi from './ops_li'
import OpsForm from './ops_form_container'
import { MODAL_ON } from "../../actions/types";
class OpsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      authors: this.props.id,
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
      {
        id: op.id,
        authors: op.authors,
        medium: op.medium,
        description: op.description,
        title: op.title,
        type: 'edit'
      }
    )
    this.props.modalOn();
  }
  createOp() {
    this.setState(
      {
        authors: '',
        medium: '',
        description: '',
        title: '',
        type: 'create'
      }
      
    )
    this.props.modalOn();
  }

  render() {
    
    let ops;
    
    if (this.props.ops && Object.keys(this.props.ops).length !== 0) {
      ops = Object.values(this.props.ops).map(op => {
      return(
        <div>
       
        <OpsLi
        key={op.id}
        id={op.id}
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
    
  
     
    
    
    return (
      
      <div>
        <div id='OpsModal' >
        {this.props.modal && <OpsForm
          key={this.state.title}
          id={this.state.id}
          authors= {this.state.authors}
          medium= {this.state.medium}
          description= {this.state.description}
          title= {this.state.title}
          type= {this.state.type}
          />}
        </div>
      <button onClick={() => {this.createOp()}}>create op</button>
        <div>
        your Ops:
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
