import { connect } from 'react-redux';
import SignUp from './signup';
import {loginUser, signUpUser} from '../../actions/auth';

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    debugger
    return {
    signUpUser: data => dispatch(signUpUser(data)),
    loginUser: data => dispatch(loginUser(data))
}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);