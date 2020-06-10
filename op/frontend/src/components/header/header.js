import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
                <button onClick={()=>{this.props.logoutUser()}}> Logout </button>
            )
            logInDiv = (
                <div></div>
            )
            logOutDiv = (
                <div></div>
            )
        } else {
            logInDiv = (
                <Link to={'/login/'}>
                    login
                </Link>
            )
            logOutDiv = (
                <Link to={'/signup/'}>
                    sign up
                </Link>
            )
        }
        return (
            <div>
            {logInDiv}
            {logOutDiv}
            {logOutButton}
   
            </div>
        )
    }
}
export default Header;