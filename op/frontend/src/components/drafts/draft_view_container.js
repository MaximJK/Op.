import { connect } from 'react-redux';

import DraftView from './draft_view';
import {fetchDrafts} from '../../actions/drafts';

const mapStateToProps = (state, ownProps) => {
    debugger
    let op = Number(ownProps.match.params.opsid);
    let draft
    if (Object.keys(state.drafts).length === 0 && state.drafts.constructor === Object) {
        draft = {}
    } else {
        draft = state.drafts[op][Number(ownProps.match.params.draftid)]
    };
    return {
        op: op,
       draft: draft
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        editDraft:(draft) => dispatch(fetchDraft(draft)),
        deleteDraft:(id) => dispatch(deleteDraft(id)),
        fetchDrafts:(id) => dispatch(fetchDrafts(id))
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DraftView);