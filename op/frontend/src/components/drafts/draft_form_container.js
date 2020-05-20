
import { connect } from 'react-redux';

import OpForm from './ops_form';
import { createOp, updateOp } from '../../actions/ops';


const msp = (state, ownProps) => {
     
    const draft =  {
        id: ownProps.id,
        user_id: state.auth.user.id,
        body: ownProps.body,
        notes: ownProps.notes,
    }
    const type = {
        type: ownProps.type
}

    return {
        draft,
        type
}
}

const mdp = dispatch => {
    return {
        // createDraft: draft => dispatch(createDraft(draft)),
        // updateDraft: draft => dispatch(updateDraft(draft))
        
    }
}

export default connect(msp,mdp)(OpForm);