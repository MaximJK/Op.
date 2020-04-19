import React, { Component } from "react";
// import axiosInstance from "../util/axiosApi";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }


    async handleSubmit(event) {
        event.preventDefault();
        debugger
        try {
            this.props.loginUser(this.state);
        } catch (error) {
            throw error;
        }
    }

    render() {
        return (
            <div>
                Login
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default Login;