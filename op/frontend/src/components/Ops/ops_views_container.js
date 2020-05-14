import { connect } from 'react-redux';
import {fetchOps} from '../../actions/ops';
import OpsView from './ops_view';

debugger
const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        id: state.auth.user.id,
        op: state.ops[ownProps.match.params.opsid]
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    // fetchOps:(id) => dispatch(fetchOps(id))
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OpsView);