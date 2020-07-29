
import { connect } from 'react-redux';

import OpForm from './ops_form';
import { createOp, updateOp } from '../../actions/ops';
import {modalOn, modalOff} from '../../actions/modal';


const msp = (state, ownProps) => {
     
    const op =  {
        id: ownProps.id,
        authors: state.auth.id,
        medium: ownProps.medium,
        description: ownProps.description,
        title: ownProps.title

    }
    const type = {
        type: ownProps.type,
        
}

    return {
        op,
        type
}
}

const mdp = dispatch => {
    return {
        createOp: op => dispatch(createOp(op)),
        updateOp: op => dispatch(updateOp(op)),
        modalOff:() => dispatch(modalOff())

    }
}

export default connect(msp,mdp)(OpForm);