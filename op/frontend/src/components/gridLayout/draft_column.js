import React from 'react';
import draft_reducer from '../../reducers/draft_reducer';
import { Link, withRouter } from 'react-router-dom';
class DraftColumn extends React.Component {

    componentDidUpdate(prevProps) { 
        debugger
        if (this.props.selected !== prevProps.selected) {
        this.props.fetchDrafts(this.props.selected);
        }
    }
    componentDidMount(){
        if(this.props.selected != 'none')
        this.props.fetchDrafts(this.props.selected)
    }
    render(){
        let drafts = <li> select an Op.</li>
        if (this.props.drafts != 'empty') {
            drafts = Object.values(this.props.drafts[this.props.selected])
            .map(draft => {
                let body
                if (draft.body.length > 10) {
                        body = draft.body.substring(0,15) + '...'
                    } else {
                        body = draft.body
                    }
                return (
                        <li>
                            {body}
                            {draft.version_num}
                            {draft.notes}
                            </li>
                )
            })

        }
        return (
            <ul>
                {drafts}
            </ul>
        )
    }
}

export default withRouter(DraftColumn);