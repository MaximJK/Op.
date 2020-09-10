import { connect } from 'react-redux';
import {fetchDrafts} from '../../actions/drafts';
import OpsView from './ops_view';


const mapStateToProps = ({ auth, ops, drafts}, ownProps) => {
    let opId = Number(ownProps.match.params.opsid)
    return {
        id: auth.id,
        opId: opId,
        op: ops[opId],
        drafts: drafts
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