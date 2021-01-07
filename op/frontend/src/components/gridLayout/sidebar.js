import React from 'react';

class Sidebar extends React.Component {



    render(){
        let drafts = <div></div>
        if (this.props.drafts != 'empty' && this.props.selected != 'none') {
            drafts = Object.values(this.props.drafts[this.props.selected])
            .map(draft => {
                
                return (
                        <div key={draft.id}>
                            
                            
                            {draft.version_num}
                            {draft.notes}
                            </div>
                )
            })

        }
        return (
            <div>
                 {drafts}
            </div>
        )
    }
}

export default Sidebar