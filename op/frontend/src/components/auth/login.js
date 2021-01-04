import React, { Component } from "react";
import { Link, withRouter, history} from 'react-router-dom';
import { loginUser } from "../../actions/auth";

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


    handleSubmit(event) {
        event.preventDefault();
        
        try {
            this.props.loginUser(this.state).then(() => this.props.logIn()).then(() => this.props.history.push("/ops/"));
        } catch (error) {
            throw error;
        }
    }

    render() {
        return (
            <div className='authDiv'>
                <h3>Login</h3>
                <br></br>
                <form className="authForm" onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                    </label>
                    <br></br>
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                    
                    <br></br>
                    <label>
                        Password:
                    </label>
                    <br></br>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                        <br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default withRouter(Login);