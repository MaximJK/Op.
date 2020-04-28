import { connect } from 'react-redux';
import Login from './login';
import {loginUser} from '../../actions/auth';

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    loginUser: username => dispatch(loginUser(username))
}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);