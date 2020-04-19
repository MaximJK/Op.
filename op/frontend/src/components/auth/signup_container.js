import { connect } from 'react-redux';
import SignUp from './signup';
import {loginUser2, signUpUser, SignupAndLogin} from '../../actions/auth';

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    debugger
    return {
    signUpUser: data => dispatch(signUpUser(data)),
    loginUser2: data => dispatch(loginUser2(data)),
    SignupAndLogin: data => dispatch(SignupAndLogin(data))
}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);