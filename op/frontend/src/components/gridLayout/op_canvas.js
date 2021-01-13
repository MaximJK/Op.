import React from 'react';
import draft_reducer from '../../reducers/draft_reducer';
import { Link, withRouter } from 'react-router-dom';
class DraftColumn extends React.Component {


    render(){
        let draft = <div>Select a Draft</div>
        if (this.props.draft ==! 'empty') {
        }

        let draft 
        return (
           {draft}
        )
    }

}

export default withRouter(DraftColumn);