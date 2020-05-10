import { connect } from 'react-redux';
import OpsIndex from './ops_index';
import {fetchOps,deleteOps  } from '../../actions/ops';


const mapStateToProps = (state) => {
    
    return {
        id: state.auth.user.id,
        ops: state.ops
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchOps:(id) => dispatch(fetchOps(id)),
    deleteOps:(id) => dispatch(deleteOps(id))
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OpsIndex);