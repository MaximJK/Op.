import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ModeToggle from './mode_toggle_container'
import { LOG_OUT } from "../../actions/action_types";
import { connect } from 'react-redux';
class Header extends Component {
    constructor(props) {
        super(props)
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
        let logOutDiv;
        let logInDiv;
        let signUpDiv;
        if (this.props.isLoggedIn === true) {
            logOutDiv = (
                <div id="greeting"> Hello {this.props.username}
                
                <button id='logout' onClick={()=>{this.props.logoutUser().then(() => this.props.logOut()).then(() => this.props.history.push("/"))}}> Logout </button>
                </div>
            )
            logInDiv = (
                <div></div>
            )
            signUpDiv = (
                <div></div>
            )
        } else {
            logInDiv = (
                <Link id='login' to={'/login/'}>
                    login
                </Link>
            )
            signUpDiv = (
                <Link id='signup' to={'/signup/'}>
                    sign up
                </Link>
            )
        }
        return (
            <div className="loginHeader">

            {logInDiv}
            {signUpDiv}
            {logOutDiv}
            <ModeToggle/>
            </div>
        )
    }
}
export default Header;