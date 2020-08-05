import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faMoon as moon, faSun as sun} from '@fortawesome/free-solid-svg-icons';
import jwt_decode from "jwt-decode";
class ModeToggler extends Component {

    toggleMode() {
       
        console.log(this.props.mode)
        if (this.props.mode === 'Dark Mode') {
            return this.props.lightMode();
        } else {
            return this.props.darkMode();
        }
    }
    initMode() {
        let darkThemeSelected = (localStorage.getItem('mode') !== null && localStorage.getItem('mode') === 'dark');
       
        darkThemeSelected ? this.props.darkMode() : this.props.lightMode();
      };
    
    componentDidMount() {
        let refresh = window.localStorage.getItem('refresh_token')
        if (refresh !== undefined) {
            let decoded = jwt_decode(refresh)
            debugger

            this.props.fetchUserById(decoded.user_id)
        }
        this.initMode() 
    }




    render () {
        // <i class="fas fa-moon"></i>
        // <i class="fas fa-sun"></i>
        let altMode
        if (this.props.mode === 'Dark Mode'){
            altMode = sun ;
        } else {
            altMode = moon ;
        };

        return (
            <div className='modeIcon'>
                <FontAwesomeIcon icon={altMode} onClick={() => this.toggleMode()} />
                {/* <button onClick={() => this.toggleMode()}>{altMode}</button> */}
            </div>
        )
    }
}
export default ModeToggler