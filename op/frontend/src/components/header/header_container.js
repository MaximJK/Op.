import { connect } from 'react-redux';
import Header from './header';
import {logoutUser} from '../../actions/auth';
import { LOG_OUT } from "../../actions/action_types";

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
    logoutUser:() => dispatch(logoutUser()),
    logOut:() => dispatch({type: LOG_OUT})
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);