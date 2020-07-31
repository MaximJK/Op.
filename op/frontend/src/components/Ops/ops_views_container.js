import { connect } from 'react-redux';
import {fetchDrafts} from '../../actions/drafts';
import OpsView from './ops_view';


const mapStateToProps = ({id = 0, ops, drafts}, ownProps) => {

    return {
        id: id,
        op: ops[Number(ownProps.match.params.opsid)],
        drafts: ops[Number(ownProps.match.params.opsid).draft]
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