import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faMoon as moon, faSun as sun} from '@fortawesome/free-solid-svg-icons'
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
        var darkThemeSelected = (localStorage.getItem('mode') !== null && localStorage.getItem('mode') === 'dark');
        // update checkbox
        
        darkThemeSelected ? this.props.darkMode() : this.props.lightMode();
      };
    
    componentDidMount() {
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
            <div>
                <FontAwesomeIcon icon={altMode} onClick={() => this.toggleMode()} />
                {/* <button onClick={() => this.toggleMode()}>{altMode}</button> */}
            </div>
        )
    }
}
export default ModeToggler