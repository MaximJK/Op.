import { connect } from 'react-redux';
import SignUp from './signup';
import {signUpUser, SignupAndLogin} from '../../actions/auth';

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    signUpUser: data => dispatch(signUpUser(data)),
    
}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);