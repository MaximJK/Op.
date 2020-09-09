import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { render } from "react-dom";
//op dashboard with links to drafts
class OpsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            draftsFetched: false
      };
    }

    componentDidMount() {
        this.props.fetchDrafts(this.props.op).then(() => this.setState({draftsFetched: true}))
    }
   
    
    render() {
         debugger
        let drafts;
        if (this.state.draftsFetched === true) {
       
        drafts = Object.values(this.props.drafts[this.props.op]).map(draft => {
            let body;
            if (draft.body.length > 15) {
                body = draft.body.slice(0,15) + '...'
            } else {
                body = draft.body
            };
            return (
                <li key={draft}>
                    draft number {draft.version_num}
                    <br></br>
                    <div>
                <Link to={`/ops/${this.props.op}/drafts/${draft.id}/`}>
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
            <h3>{this.props.op.title}</h3>
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
