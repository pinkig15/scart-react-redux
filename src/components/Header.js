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
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("username")
  }

  searchHandler = (event) => {
    this.setState({searchInp: event.target.value}, ()=> {
      this.props.search(this.state.searchInp)
    });
  }

    render() {
      const user = localStorage.getItem("username");
      return (
        <header className="App-header">
          <div>
            <img className="logo-img" src={"favicon.ico"} alt="logo"/>
            
          </div>
          <div>
            <input
              className="search-inpbx"
              placeholder="Search Products"
              type="text"
              name="searchInp"
              value={this.state.value}
              onChange={this.searchHandler}
            />
            <span>
              <span className="cart-logo">
              {`Welcome ${user}!`}
                <span><Link to="/scart"><CartIcon/></Link>1 items</span>
              </span>
              <span><Link to="/" onClick={()=> this.logout()}><LogoutIcon /></Link></span>
            </span>
            
          </div>
        </header>
      );
    }
}

export default Header;