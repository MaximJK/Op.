import { connect } from 'react-redux';
import OpColumn from './op_column';
import {fetchOps,deleteOp  } from '../../actions/ops';
import {modalOn, modalOff} from '../../actions/modal';
import {selectOp} from '../../actions/select_op';


const mapStateToProps = ({auth, ops, modal}) => {
    
    return {
        id: auth.id,
        ops: ops,
        modal: modal
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchOps:(id) => dispatch(fetchOps(id)),
    deleteOp:(id) => dispatch(deleteOp(id)),
    modalOn:() => dispatch(modalOn()),
    modalOff:() => dispatch(modalOff()),
    selectOp:(op) => dispatch(selectOp(op))
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OpColumn);