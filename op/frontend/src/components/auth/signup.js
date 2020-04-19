import React, { Component } from "react";


class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email:"",
            errors:{}
        };

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
            this.props.signUpUser(this.state);
        } catch (error) {
            throw error
        }
        // debugger
    
    // this.props.loginUser2(this.state)
        // debugger
                
        }

    render() {
        return (
            <div>
                Signup
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                        { this.state.errors.username ? this.state.errors.username : null}
                    </label>
                    <label>
                        Email:
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        { this.state.errors.email ? this.state.errors.email : null}
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                        { this.state.errors.password ? this.state.errors.password : null}
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Signup;