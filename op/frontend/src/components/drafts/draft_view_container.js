import { connect } from 'react-redux';
import {fetchOps} from '../../actions/ops';
import DraftView from './draft_view';


const mapStateToProps = (state, ownProps) => {
    
    return {
       drafts: ownProps
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    // fetchOps:(id) => dispatch(fetchOps(id))
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DraftView);