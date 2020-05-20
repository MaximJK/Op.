import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { render } from "react-dom";
import DraftForm from "./draft_form"
//op dashboard with links to drafts
class DraftView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            draft: {
                id: this.props.op.id,
                authors: this.props.op.authors,
                medium: this.props.op.medium,
        }
      };

    render() {
        debugger
        return (
        <div>
            <div id='DraftModal'>
            {this.state.modal && <DraftForm
            key={this.state.id}
            id={this.state.id}
            body={this.state.body}
            notes={this.state.notes}
            
            
            />}
            </div>
        {this.props.draft.body}
        {this.props.draft.notes}
        <button onClick={() => {{this.props.editDraft(draft)}}}>edit op</button>
        <button onClick={() => {{this.props.deleteDraft(op.draft)}}}>delete op</button>
        <br/>

        <Link to={'/op/id/'} >
           'back to Op.'
        </Link>
        </div>

    
    
        )
    };
}
export default withRouter(DraftView);
