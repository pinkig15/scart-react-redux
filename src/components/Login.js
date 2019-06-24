import React, { Component } from 'react';
import {
    withRouter
  } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }; 
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ user: {...this.state.user, [name]: value } }); 
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state.user;
        if (username && password) {
            this.props.login(username);
            // this.props.history.push("/store")
        }
    }

    componentDidMount = () => {
        console.log("in login", this.props.history)
    }

    render() {
        const {username, password} = this.state.user;
        return (
            <div className="login-container container">
                <h2>sCart</h2>
                <form name="login-form" onSubmit={(e) => this.handleLogin(e)}>
                <input type="text" className="form-control" name="username" value={username} onChange={(e) => this.handleChange(e)} placeholder="Username"/>
                <input type="password" className="form-control" name="password" value={password} onChange={(e) => this.handleChange(e)} placeholder="Password"/>
                <button disabled={username.trim() === '' || password.trim() === ''} className="btn">Login</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);