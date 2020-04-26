import { connect } from 'react-redux';
import opsIndex from './ops_index';
import {fetchOps} from '../../actions/ops';

const mapStateToProps = (state) => {
    
    return {
        isLoggedIn: Boolean(state.auth.username)
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchOps:(id) => dispatch(fetchOps(id))
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(opsIndex);