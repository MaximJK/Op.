import React, { Component } from "react";

class ModeToggler extends Component {





    toggleMode() {
        if (this.props.mode === 'Dark Mode') {
            return this.props.lightMode();
        } else {
            return this.props.darkMode();
        }
    }




    render () {
        return (
            <div>
                <button onClick={() => this.toggleMode()}>{this.props.mode}</button>
            </div>
        )
    }
}
export default ModeToggle