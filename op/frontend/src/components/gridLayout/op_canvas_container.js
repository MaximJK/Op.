import { connect } from 'react-redux';
import OpCanvas from './op_canvas';
import {fetchDrafts} from '../../actions/drafts';
import {modalOn, modalOff} from '../../actions/modal';
import {selectOp} from '../../actions/select_op';


const mapStateToProps = (state, ownProps) => {
    let selectedDraft = Number(ownProps.match.params.draftid)
    
    return {
        selected: state.selected,
        drafts: state.drafts,
        selectedDraft: selectedDraft
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    
    
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OpCanvas);