import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { render } from "react-dom";
//op dashboard with links to drafts
class DraftView extends React.Component {
    constructor(props) {
        super(props);
      };

    render() {
        debugger
        return (
        <div>
        {this.props.draft.body}
        <br/>

        <Link to={'/op/id/'} >
           'back to Op.'
        </Link>
        </div>

    
    
        )
    };
}
export default withRouter(DraftView);
