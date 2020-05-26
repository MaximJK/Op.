import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import axiosInstance from "../util/axiosApi";
class Header extends Component {
    constructor(props) {
        super(props)
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
        let logOutButton
        if (this.props.isLoggedIn === true) {
            logOutButton = (
                <button onClick={()=>{this.props.logoutUser()}}> Logout </button>
            )
        }
        return (
            <div>
                <Link to={'/login/'}>
                    login
                </Link>

                <Link to={'/signup/'}>
                    sign up
                </Link>
             {logOutButton}
   
            </div>
        )
    }
}
export default Header;