import { connect } from 'react-redux';
import {fetchDrafts} from '../../actions/drafts';
import OpsView from './ops_view';


const mapStateToProps = (state, ownProps) => {
    
    return {
        id: state.auth.user.id,
        op: state.ops[Number(ownProps.match.params.opsid)],
        drafts: state.drafts
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchDrafts:(id) => dispatch(fetchDrafts(id))
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OpsView);