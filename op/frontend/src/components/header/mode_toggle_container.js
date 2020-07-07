import { connect } from 'react-redux';

import {darkMode, lightMode} from '../../actions/d_mode';

const mapStateToProps = (state) => {
    
    return {
        mode: this.state.mode
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        darkMode: () => dispatch(darkMode()),
        lightMode: () => dispatch(lightMode()),
    
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(modeToggle);