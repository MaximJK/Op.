import { connect } from 'react-redux';
import {fetchOps} from '../../actions/ops';
import DraftView from './draft_view';


const mapStateToProps = (state, ownProps) => {
    
    return {
        id: Number(ownProps.match.params.opsid),
       draft: state.ops[Number(ownProps.match.params.opsid)].draft.filter(draft => draft.id === Number(ownProps.match.params.draftid))[0]
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