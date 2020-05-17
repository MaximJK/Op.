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
        drafts: this.props.op.draft
            }
      };
    }

    
    render() {
        debugger
        let drafts
        if (this.props.op.draft) {
        drafts = this.state.op.drafts.map(draft => {
            
            
            return(
                <li key={draft}>
                    {draft.body}
                    <br></br>
                    'draft number:'{draft.version_num}
                </li>
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
            <ul>
                {drafts}
            </ul>
        </div>
    
    
        )
    };
}

export default withRouter(OpsView);
