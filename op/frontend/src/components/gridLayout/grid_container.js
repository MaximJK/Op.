import { connect } from 'react-redux';
import Grid from './grid';
import {fetchOps,deleteOp  } from '../../actions/ops';
import {modalOn, modalOff} from '../../actions/modal';
import {selectOp} from '../../actions/select_op';
import { zip } from 'lodash';


const mapStateToProps = (state, ownProps) => {
    
    
    return {
        
        selected: ownProps.selected,
        
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchOps:(id) => dispatch(fetchOps(id)),
   
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);