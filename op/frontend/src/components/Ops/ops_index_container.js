import { connect } from 'react-redux';
import OpsIndex from './ops_index';
import {fetchOps} from '../../actions/ops';

const mapStateToProps = (state) => {
    
    return {
        id: state.auth.user.id,
        ops: state.ops
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchOps:(id) => dispatch(fetchOps(id))
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OpsIndex);