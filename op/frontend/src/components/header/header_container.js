import { connect } from 'react-redux';
import Header from './header';
import {logoutUser} from '../../actions/auth';

const mapStateToProps = (state) => {
    debugger
    return {
        isLoggedIn: state.auth.user !== undefined,
        state: state
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    logoutUser:() => dispatch(logoutUser())
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);