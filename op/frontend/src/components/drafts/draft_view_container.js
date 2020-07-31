import { connect } from 'react-redux';
import {fetchOps} from '../../actions/ops';
import DraftView from './draft_view';

const mapStateToProps = (state, ownProps) => {
    debugger
    
    return {
        id: Number(ownProps.match.params.opsid),
       draft: state.drafts[Number(ownProps.match.params.opsid)][Number(ownProps.match.params.draftid)]
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        editDraft:(draft) => dispatch(fetchDraft(draft)),
        deleteDraft:(id) => dispatch(deleteDraft(id))
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DraftView);