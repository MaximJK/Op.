import { connect } from 'react-redux';
import modeToggle from './mode_toggle'
import {darkMode, lightMode} from '../../actions/d_mode';
import {fetchUserById, logoutUser} from '../../actions/auth'

const mapStateToProps = (state) => {
    
    return {
        mode: state.dmode
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        darkMode: () => dispatch(darkMode()),
        lightMode: () => dispatch(lightMode()),
        fetchUserById:(id) => dispatch(fetchUserById(id)),
    
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(modeToggle);