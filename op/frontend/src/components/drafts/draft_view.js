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
    }
    render() {
        debugger
        return (
        <div>
            <div >
                <Link to={{ 
                    pathname: `'/ops/:opsid/drafts/form`, 
                        state: {
                            op: x,
                            body: x, 
                            notes: x,
                            version_num: x,
                            is_public:x
                    } 
                    }}>edit draft</Link>
            </div>
        <button onClick={() => {{this.props.deleteDraft(op.draft)}}}>delete op</button>
            
        {this.props.draft.body}
        {this.props.draft.notes}
        
        <br/>

        <Link to={'/op/id/'} >
           'back to Op.'
        </Link>
        </div>

    
    
        )
    };
};
export default withRouter(DraftView);
