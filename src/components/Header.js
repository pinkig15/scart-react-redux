import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { LogoutIcon, CartIcon } from '../constants.js';


class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchInp: 'Provogue',
      username: this.props.username
    }
  }

  logout = () => {
    this.props.logout()
  }

  searchHandler = (event) => {
    this.setState({searchInp: event.target.value}, ()=> {
      this.props.search(this.state.searchInp)
    });
  }

    render() {
        return (
            <header className="App-header">
          <img className="logo-img" src={"favicon.ico"} alt="logo"/>
          
          <input
           className="search-inpbx"
            placeholder="Search Products"
            type="text"
            name="searchInp"
            value={this.state.value}
            onChange={this.searchHandler}
        />
          <div className="header-right">
          <span>
            `Welcome ${this.state.username}!` <br/>
            <Link to="/scart">
              <CartIcon/>
            </Link>
             1 items
          </span>
          <Link to="/" onClick={()=> this.logout()}><LogoutIcon /></Link>
          </div>
        </header>
        );
    }
}

export default Header;