import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { LogoutIcon, CartIcon } from '../constants.js';


class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchInp: 'Provogue',
      username: this.props.username
    }
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
                <span><Link to="/scart"><CartIcon/></Link>0 item</span>
              </span>
              <span><Link to="/" onClick={()=> this.props.logout()}><LogoutIcon /></Link></span>
            </span>
            
          </div>
        </header>
      );
    }
}

export default Header;