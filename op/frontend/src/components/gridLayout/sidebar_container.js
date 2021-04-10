import { connect } from 'react-redux';
import DraftColumn from './draft_column';
import {fetchDrafts} from '../../actions/drafts';
import {modalOn, modalOff} from '../../actions/modal';
import {selectOp} from '../../actions/select_op';
import Sidebar from './sidebar';


const mapStateToProps = (state, ownProps) => {
    

    return {
        selected: state.selected,
        drafts: state.drafts,
        modal: modal,
    };
};
const mapDispatchToProps = (dispatch) => {
    
    return {
        modalOn:() => dispatch(modalOn()),
        modalOff:() => dispatch(modalOff()),
}};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);