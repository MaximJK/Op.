import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ModeToggle from './mode_toggle_container'
// import axiosInstance from "../util/axiosApi";
class Header extends Component {
    constructor(props) {
        super(props)
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
        let logOutButton;
        let logInDiv;
        let logOutDiv;
        if (this.props.isLoggedIn === true) {
            logOutButton = (
                <button id='logout' onClick={()=>{this.props.logoutUser()}}> Logout </button>
            )
            logInDiv = (
                <div></div>
            )
            logOutDiv = (
                <div></div>
            )
        } else {
            logInDiv = (
                <Link id='login' to={'/login/'}>
                    login
                </Link>
            )
            logOutDiv = (
                <Link id='signup' to={'/signup/'}>
                    sign up
                </Link>
            )
        }
        return (
            <div className="loginHeader">

            {logInDiv}
            {logOutDiv}
            {logOutButton}
            <ModeToggle/>
            </div>
        )
    }
}
export default Header;