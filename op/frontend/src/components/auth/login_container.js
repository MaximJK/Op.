import { connect } from 'react-redux';
import Login from './login';
import {loginUser} from '../../actions/auth';

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    debugger
    return {
    loginUser: data => dispatch(loginUser(data))
}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);