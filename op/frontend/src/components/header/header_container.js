import { connect } from 'react-redux';
import Header from './header';
import {logoutUser} from '../../actions/auth';

const mapStateToProps = (state) => {
    let isLoggedIn = (state.auth.id !== undefined);
    let username;
    if (isLoggedIn) {
        username = state.auth.username
    };
    
    return {
        isLoggedIn: isLoggedIn,
        username: username,
        state: state,

    };
};
const mapDispatchToProps = (dispatch) => {
    
    return {
    logoutUser:() => dispatch(logoutUser())
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);