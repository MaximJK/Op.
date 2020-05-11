import { connect } from 'react-redux';
import OpsIndex from './ops_index';
import {fetchOps,deleteOp  } from '../../actions/ops';


const mapStateToProps = (state) => {
    
    return {
        id: state.auth.user.id,
        ops: state.ops
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchOps:(id) => dispatch(fetchOps(id)),
    deleteOp:(id) => dispatch(deleteOp(id))
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OpsIndex);