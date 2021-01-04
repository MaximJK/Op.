import React from "react";
import OpsLi from '../ops/ops_li';
import OpsForm from '../ops/ops_form_container';
import { MODAL_ON } from "../../actions/action_types";
import Popup from 'reactjs-popup';
import { Link, withRouter } from 'react-router-dom';

class OpColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      authors: this.props.id,
      medium: '',
      description: '',
      title: '',
      type: '',
      modal: this.props.modal
  };

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
  componentDidUpdate(prevProps) { 
    if (this.props.id !== prevProps.id) {
    this.props.fetchOps(this.props.id);
    }
    
}
  componentDidMount(){
    this.props.fetchOps(this.props.id);
  }

  modalClick(event) {
    event.preventDefault();
    console.log(event.currentTarget.id)
    console.log(event.currentTarget)
    if (event.currentTarget.id === 'OpsModal') {
      this.props.modalOff();
    };
  };

  render() {
    
    let ops;
    
    if (this.props.ops && Object.keys(this.props.ops).length !== 0) {
      ops = Object.values(this.props.ops).map(op => {
        let selected
        if (op.id === this.props.selected) {
          selected = true
        } 
        else {selected = false};

      return(
        <div>
        <OpsLi
        key={op.title}
        id={op.id}
        title={op.title}
        drafts={op.draft}
        selectOp={this.props.selectOp}
        isSelected = {selected}
        />
        {/* <button onClick={() => {{this.editOp(op)}}}>edit op</button>
        <button onClick={() => {{this.props.deleteOp(op.id)}}}>delete op</button> */}
        </div>
      );
    })}
    else {
      ops = <li></li>
    };
    
    
    
    
    return (
      
      <div className="" >
        <div>
        <div id='OpsModal' style={this.props.modal ? {} :  {display: 'none'}} onClick={e => this.modalClick(e)}>
          </div>
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

export default withRouter(OpColumn);
