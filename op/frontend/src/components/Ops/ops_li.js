import React from "react";
import { Link, withRouter } from 'react-router-dom';

const OpsLi = (op) => {
    let title = op.title
    let  drafts = op.drafts.map(draft => {
        let body;
        if (draft.body.length > 10) {
            body = draft.body.substring(0,15) + '...'
        } else {
            body = draft.body
        }
        return(
            <li key={body}>
                {body}
            </li>
        )
    })

    return (
        <div>
        <Link to={`${op.id}`}>
        {title}
        </Link>
        number of drafts:{drafts.length}
        
        
    </div>
    
    )

}

export default withRouter(OpsLi);
