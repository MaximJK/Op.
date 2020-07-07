import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
class ModeToggler extends Component {





    toggleMode() {
        console.log(this.props.mode)
        if (this.props.mode === 'Dark Mode') {
            return this.props.lightMode();
        } else {
            return this.props.darkMode();
        }
    }




    render () {
        // <i class="fas fa-moon"></i>
        // <i class="fas fa-sun"></i>
        let altMode
        if (this.props.mode === 'Dark Mode'){
            altMode = "Light Mode";
        } else {
            altMode = "Dark Mode";
        };

        return (
            <div>
                <FontAwesomeIcon icon={faCoffee} />
                <button onClick={() => this.toggleMode()}>{altMode}</button>
            </div>
        )
    }
}
export default ModeToggler