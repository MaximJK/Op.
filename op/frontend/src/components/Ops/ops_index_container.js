import { connect } from 'react-redux';
import OpsIndex from './ops_index';
import {fetchOps,deleteOp  } from '../../actions/ops';
import {modalOn, modalOff} from '../../actions/modal';

const mapStateToProps = ({id = 0, ops, modal}) => {
    
    return {
        id: id,
        ops: ops,
        modal: modal
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchOps:(id) => dispatch(fetchOps(id)),
    deleteOp:(id) => dispatch(deleteOp(id)),
    modalOn:() => dispatch(modalOn()),
    modalOff:() => dispatch(modalOff())
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OpsIndex);