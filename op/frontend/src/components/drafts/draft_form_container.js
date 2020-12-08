import { connect } from 'react-redux';
import DraftForm from './draft_form';
import { createDraft, updateDraft } from '../../actions/drafts';


const msp = (state, ownProps) => {
     
    
    return {
        "draft": ownProps.location.state.draft,
        "type": ownProps.location.state.type
}
}

const mdp = dispatch => {
    return {
        createDraft: draft => dispatch(createDraft(draft)),
        updateDraft: draft => dispatch(updateDraft(draft)),
        
    }
}

export default connect(msp,mdp)(DraftForm);