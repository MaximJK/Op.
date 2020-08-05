import { connect } from 'react-redux';
import Login from './login';
import {loginUser} from '../../actions/auth';

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    loginUser: username => dispatch(loginUser(username)),
    logIn:() => dispatch({type: 'LOG_IN'})
}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);