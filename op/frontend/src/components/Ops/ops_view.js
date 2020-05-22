import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { render } from "react-dom";
//op dashboard with links to drafts
class OpsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            op: {
        id: this.props.op.id,
        authors: this.props.op.authors,
        medium: this.props.op.medium,
        description: this.props.op.description,
        title: this.props.op.title,
        type: this.props.op.type,
        drafts: this.props.op.draft,

            }
      };
    }

    
    render() {
        
        let drafts
        if (this.props.op.draft) {
        drafts = this.state.op.drafts.map(draft => {

            return (
                <Link to={`/ops/${this.props.op.id}/drafts/${draft.id}/`}>
                <li key={draft}>
                    {draft.body}
                    <br></br>
                    'draft number:'{draft.version_num}
                </li>
                </Link>
            )
        })} else {
            return (
                <li></li>
            )
        }
        return (
        <div>
            {this.state.op.title}
            <div>
            {this.props.op.medium}
            {this.props.op.description}
            {this.props.op.medium}
            'number of drafts': {drafts.length}
            </div>
            <div >
                <Link to={{ 
                    pathname: `/ops/${this.props.op.id}/drafts/form`, 
                        state: {
                            op: this.props.op.id,
                            body: '', 
                            notes: '',
                            //do version logic below
                            version_num: '',
                            is_public: ''
                    } 
                    }}>new draft</Link>
    </div>
            <ul>
                {drafts}
            </ul>
        <Link to={`/ops/`}>
        "Back to Index"
        </Link>
        </div>
    
    
        )
    };
}

export default withRouter(OpsView);
