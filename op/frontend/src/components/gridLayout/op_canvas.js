import React from 'react';
import draft_reducer from '../../reducers/draft_reducer';
import { Link, withRouter } from 'react-router-dom';

class OpCanvas extends React.Component {



    render(){
        let draft = 'choose a draft'
        if (this.props.drafts != 'empty' && this.props.selected != 'none' && this.props.selectedDraft) {
                draft = this.props.drafts[this.props.selected][this.props.selectedDraft]['body']
                
            }

        
        return (
            <div>
                
                 {draft}
            </div>
        )
    }

}

export default withRouter(OpCanvas);