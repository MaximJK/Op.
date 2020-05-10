import React from "react";

const OpsView = (op) => {
    let title = op.title
    let  drafts = op.drafts.map(draft => {
        if (draft.body.length )
        return(
            <li key={draft.body}>
                {draft.body}
            </li>
        )
    })

    return (

    <div>
        <ul>
       {title}
        {drafts}
        </ul>
        
    </div>

    )

}

export default OpsView;
