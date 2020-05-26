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
                id: this.props.draft.id,
                authors: this.props.draft.body,
                medium: this.props.draft.notes,
        }
      };
    }
    render() {
        debugger
        return (
        <div>
            <div >
                <Link to={{ 
                    pathname: `/ops/${this.props.id}/draft/edit/`, 
                        state: {'draft': {
                            op: this.props.id,
                            body: this.props.draft.body, 
                            notes: this.props.draft.notes,
                            version_num: this.props.draft.version_num,
                            is_public: false
                    },
                    'type': 'edit' }
                    }}>edit draft</Link>
            </div>
        <button onClick={() => {{this.props.deleteDraft(op.draft)}}}>delete op</button>
            
        {this.props.draft.body}
        {this.props.draft.notes}
        
        <br/>

        <Link to={`/ops/${this.props.id}/`} >
           `back to Op.'
        </Link>
        </div>

    
    
        )
    };
};
export default withRouter(DraftView);
