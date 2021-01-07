import { connect } from 'react-redux';
import DraftColumn from './draft_column';
import {fetchDrafts} from '../../actions/drafts';
import {modalOn, modalOff} from '../../actions/modal';
import {selectOp} from '../../actions/select_op';
import Sidebar from './sidebar';


const mapStateToProps = (state, ownProps) => {
    debugger

    return {
        selected: state.selected,
        drafts: state.drafts
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchDrafts:(id) => dispatch(fetchDrafts(id)),
    
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);