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
    };

    componentDidMount() {
        
        if(Object.keys(this.props.draft).length === 0 && this.props.draft.constructor === Object) {
            this.props.fetchDrafts(this.props.op);
        };
    };

    render() {
        
        return (
        <div className="authDiv">
            <div >
                <Link to={{ 
                    pathname: `/ops/${this.props.op}/draft/edit/`, 
                        state: {'draft': {
                            op: this.props.op,
                            id: this.props.draft.id,
                            body: this.props.draft.body, 
                            notes: this.props.draft.notes,
                            version_num: this.props.draft.version_num,
                            is_public: false
                    },
                    'type': 'edit' }
                    }}>edit draft</Link>
            </div>
            <br></br>
        <br></br>  
        {this.props.draft.body}
        <br></br>
        {this.props.draft.notes}
        <br/>

        <button onClick={() => {{this.props.deleteDraft(op.draft)}}}>delete draft</button>
        <br></br>
        <Link to={`/ops/${this.props.op}/`} >
           `back to Op.'
        </Link>
        </div>

    
    
        )
    };
};
export default withRouter(DraftView);
