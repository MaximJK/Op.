
import { connect } from 'react-redux';

import OpForm from './ops_form';
import { createOp, updateOp } from '../../actions/ops';


const msp = (state, ownProps) => {
     
    const op =  {
        authors: state.auth.user.id,
        medium: ownProps.medium,
        description: ownProps.description,
        title: ownProps.title

    }
    const type = {
        type: ownProps.type
}

    return {
        op,
        type
}
}

const mdp = dispatch => {
    return {
        createOp: op => dispatch(createOp(op)),
        updateOp: op => dispatch(updateOp(op))

    }
}

export default connect(msp,mdp)(OpForm);