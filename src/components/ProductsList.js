import React, { Component } from 'react';
import Product from './Product';
import Loader from './Loader';
import ProductFilter from './ProductFilter';

class ProductsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
          data: this.props.data,
          filterData: this.props.filterData,
          searchInp: this.props.searchInp,
          fetching: this.props.fetching,
          filterFetching: this.props.filterFetching,
          error: this.props.error,
          filterError: this.props.filterError
        }
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
      const {data, filterData} = nextProps;
      this.setState({data, filterData})
      
    }

  searchHandler = e => {
    this.setState({ searchInp: e.target.value }, () => {
      this.props.search(this.props.searhInp);
    });
  };

  showProduct = title => {
    return this.hasAnyOfWrd(
      this.state.searchInp.toLowerCase(),
      title.toLowerCase()
    )
      ? true
      : false;
  };

  hasAnyOfWrd = (words, textToSearch) => {
    const arr = words.toLowerCase().split(' ')
    let flag = false
    const arrL = arr.length
    for (let i = 0; i < arrL; i++) {
        if (textToSearch.toLowerCase().indexOf(arr[i]) >= 0) {
            flag = true
            break
        }
    }
    return flag
  }
   
  render() {
      const {filterData, data} = this.state
      return (
        <div className="main-container">
          {!this.props.fetching ? <>
          <ProductFilter filterData={filterData}/>
          {data && data.length > 0 ? 
              <main className="product-container">
                {data.map(item => this.showProduct(item.title) && <Product key={item.id} item={item} />)}
              </main> : 
              <div className="no-result">No Product Found!</div>
          }
          </> : <Loader />}
        </div>
      );
  }
}

export default ProductsList;