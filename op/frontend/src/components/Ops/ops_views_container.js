import { connect } from 'react-redux';
import {fetchDrafts} from '../../actions/drafts';
import OpsView from './ops_view';


const mapStateToProps = ({ auth, ops, drafts}, ownProps) => {

    return {
        id: auth.id,
        op: Number(ownProps.match.params.opsid),
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