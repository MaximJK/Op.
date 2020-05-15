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
            }
      };
    }

    
    render() {
        debugger

        return (
        <div>
            {this.props.op.id}
        </div>
    
    
        )
    };
}

export default withRouter(OpsView);
