import { connect } from 'react-redux';
import Header from './header';
import {logoutUser} from '../../actions/auth';

const mapStateToProps = (state) => {
    
    return {
        isLoggedIn: state.auth.username !== undefined
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