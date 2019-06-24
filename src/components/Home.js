import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import { FETCH_PRODUCTS, SEARCH_PRODUCT } from "../constants";
import { connect } from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchInp: "",
          data: [],
          error: this.props.error,
          username: this.props.username
        };
      }

      UNSAFE_componentWillReceiveProps = (nextProps) => {
        this.setState({data: nextProps.data})
        
      }

      search = (str) => {
        this.setState({searchInp: str}, ()=> {
          this.props.search(this.state.searchInp)
        })
        
      }

      componentDidMount() {
        this.props.fetchProducts();
      }

    render() {
        const { data, error, searchInp } = this.state;
        return (
          error ? 
          <p style={{ color: "red" }}>
              Something went wrong!<span>error: {error}</span>
          </p> : 
          <>
            <Header search={(str)=> this.search(str) } logout={this.logout} login={this.props.login} username={this.state.username}/>
            <Products data={data} searchInp={searchInp}/>
            <Footer/>
          </>
        );
    }
}


const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    data: state.data,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
return {
  fetchProducts: () => dispatch({ type: `${FETCH_PRODUCTS}_PENDING` }),
  search: data => dispatch({ type: `${SEARCH_PRODUCT}_PENDING`, data: data })
};
};

export default connect(
mapStateToProps,
mapDispatchToProps
)(Home);
