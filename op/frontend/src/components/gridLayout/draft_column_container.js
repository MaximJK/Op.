import { connect } from 'react-redux';
import OpColumn from './op_column';
import {fetchDrafts} from '../../actions/drafts';
import {modalOn, modalOff} from '../../actions/modal';
import {selectOp} from '../../actions/select_op';


const mapStateToProps = ({auth, ops, modal}) => {
    
    return {
        // id: op.id,
        // ops: ops,
        // modal: modal
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchDrafts:(id) => dispatch(fetchDrafts(id)),
    
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OpColumn);