import { connect } from 'react-redux';
import {createDraft} from '../../actions/drafts';
import {modalOn, modalOff} from '../../actions/modal';
import Sidebar from './sidebar';


const mapStateToProps = (state, ownProps) => {
    

    return {
        selected: state.selected,
        drafts: state.drafts,
        modal: state.modal,
    };
};
const mapDispatchToProps = (dispatch) => {
    
    return {
        // modalOn:() => dispatch(modalOn()),
        // modalOff:() => dispatch(modalOff()),
        createDraft:() => dispatch(createDraft())
}};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);