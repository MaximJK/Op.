import React, { Component } from "react";

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
        let altMode
        if (this.props.mode === 'Dark Mode'){
            altMode = "Light Mode";
        } else {
            altMode = "Dark Mode";
        };

        return (
            <div>
                <button onClick={() => this.toggleMode()}>{altMode}</button>
            </div>
        )
    }
}
export default ModeToggler