import { connect } from 'react-redux';

import {fetchOps,deleteOp  } from '../../actions/ops';
import {modalOn, modalOff} from '../../actions/modal';
import {selectOp} from '../../actions/select_op';


const mapStateToProps = (state) => {
    // if (state.selec)
    return {
        selected_ops: op,
        
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchOps:(id) => dispatch(fetchOps(id)),
   
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);