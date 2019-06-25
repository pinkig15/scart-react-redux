import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductsList from './ProductsList';
import { FETCH_PRODUCTS, SEARCH_PRODUCT, FETCH_FILTER_DATA } from "../constants";
import { connect } from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchInp: "",
          data: [],
          fetching: false,
          error: null,
          filterData: [],
          filterFetching: false,
          filterError: null,
          username: null,
        };
      }

      UNSAFE_componentWillReceiveProps = (nextProps) => {
        const {data, filterData, fetching} = nextProps;
        this.setState({data, filterData, fetching})
        
      }

      search = (str) => {
        this.setState({searchInp: str}, ()=> {
          this.props.search(this.state.searchInp)
        })
      }

      componentDidMount() {
        this.props.fetchFilterData()
        this.props.fetchProducts();
      }
    render() {
        const { searchInp, fetching, data, error, filterData, filterError, filterFetching } = this.state;
        return (
          <>
            <Header search={(str)=> this.search(str) } logout={this.logout} login={this.props.login} username={this.state.username}/>
            <ProductsList 
              searchInp={searchInp} 
              data={data} 
              fetching={fetching} 
              error={error}
              filterData={filterData} 
              filterError={filterError}
              filterFetching={filterFetching}
              fetchFilterData={this.props.fetchFilterData}  
              />
            <Footer/>
          </>
        );
    }
}

const mapStateToProps = state => {
  const {fetching, data, error, filterData, filterError, filterFetching} = state
  return {fetching, data, error, filterData, filterError, filterFetching}
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch({ type: `${FETCH_PRODUCTS}_PENDING` }),
    fetchFilterData: () => dispatch({type: `${FETCH_FILTER_DATA}_PENDING`}),
    search: data => dispatch({ type: `${SEARCH_PRODUCT}_PENDING`, data: data })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
