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
            },
            draftsFetched: false
      };
    }

    componentDidMount() {
        this.props.fetchDrafts(this.props.op.id).then(() => this.setState({draftsFetched: true}))
    }
   
    
    render() {
         
        let drafts;
        if (this.state.draftsFetched === true) {
        
        drafts = this.props.op.draft.map(draft => {
            let body;
            if (draft.body.length > 10) {
                body = draft.body.slice(0,10) + '...'
            };
            return (
                <li key={draft}>
                    draft number {draft.version_num}
                    <br></br>
                    <div>
                <Link to={`/ops/${this.props.op.id}/drafts/${draft.id}/`}>
                    {body}
                </Link>
                    </div>
                </li>
            )
        })} else {
            return (
                <li></li>
            )
        }
        return (
        <div className="authDiv" >
            <h3>{this.state.op.title}</h3>
            <div>
            Medium: {this.props.op.medium}
            <br></br>
            {this.props.op.description}
            <br></br>
            Number of Drafts: {drafts.length}
            <br></br>
            </div>
            <div >
                <Link to={{ 
                    pathname: `/ops/${this.props.op.id}/draft/create/`, 
                        state: {'draft': {
                            op: this.props.op.id,
                            body: '', 
                            notes: '',
                            //do version logic below
                            version_num: drafts.length + 1,
                            is_public: false
                    },
                     'type': 'create'
                    }}}>new draft</Link>
    </div>
            <ul>
                {drafts}
            </ul>
        <Link to={`/ops/`}>
        Back to Index
        </Link>
        </div>
    
    
        )
    };
}

export default withRouter(OpsView);
