import React, { Component } from 'react';
import { LOGIN } from "../constants";
import { connect } from "react-redux";
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

    UNSAFE_componentWillReceiveProps = (nextProps) => {
            if(nextProps.userinfo && nextProps.userinfo[0]) {
            localStorage.setItem("isAuthenticated", "true")
            localStorage.setItem("username", nextProps.userinfo[0].username)
            this.props.history.replace("/store")
        }
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
            this.props.login(this.state.user);
        }
    }

    render() {
        const {username, password} = this.state.user;
        return (
            <form name="login-form" onSubmit={(e) => this.handleLogin(e)} className="login-form">
                <h2>sCart</h2>
                {!this.props.fetching ? <div className="error-msg">{this.props.error}</div> : ""}
                <input type="text" className="form-control" name="username" value={username} onChange={(e) => this.handleChange(e)} placeholder="Username"/>
                <input type="password" className="form-control" name="password" value={password} onChange={(e) => this.handleChange(e)} placeholder="Password"/>
                <button disabled={username.trim() === '' || password.trim() === ''} className="btn btn-primary">Login</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
      fetching: state.fetching,
      userinfo: state.userinfo,
      error: state.error
    };
  };
  
const mapDispatchToProps = dispatch => {
return {
    login: data => dispatch({type: `${LOGIN}_PENDING`, data: data})
};
};

export default connect(
mapStateToProps,
mapDispatchToProps
)(Login);
  