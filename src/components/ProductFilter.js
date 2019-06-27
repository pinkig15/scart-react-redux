import React, { Component } from 'react';
import { ResetIcon } from '../constants';

class ProductFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: this.props.data,
          filterData: this.props.filterData,
          filteredData: []
        }
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        this.setState({filterData: nextProps.filterData, data: nextProps.data})
    }

    getFilterSubData = (filterData, type) => (
      filterData.filter(item=> item.type === type)[0]
    )

    resetFilter = () => {
        this.setState({filteredData: this.state.data})
      }
      
      getFilteredData = (value, type) => {
        var newArr1, newArr2;
        if(type === "color") {
          newArr1 = this.state.data.filter(item => item.colour.color === value)
          this.setState({filteredData: newArr1}, () => {
            this.props.getFilteredProducts(this.state.filteredData)
          })
        }
        else if(type === "brand"){
          newArr2 = this.state.data.filter(item => item.brand.value === value)
          this.setState({filteredData: newArr2}, () => {
            this.props.getFilteredProducts(this.state.filteredData)
          })
        }
      }
    
    render() {
      const {filterData} = this.props;
      const colorsData = filterData && this.getFilterSubData(filterData, 'COLOUR');
      const brandsData = filterData && this.getFilterSubData(filterData, 'BRAND');
      const pricesData = filterData && this.getFilterSubData(filterData, 'PRICE')
      
        return (
            <aside className="filter">
              <div className="filter-title">
                  <span>Filter</span> <span onClick={()=> this.resetFilter()}>
                    <ResetIcon />
                  </span>
              </div>
              <b>Color</b>
              <div className="color-span-filter">
                <>
                  {colorsData && colorsData.values && colorsData.values.map((item, index) =>
                  <svg onClick={()=> this.getFilteredData(item.color, "color")} key={index} width="30" height="30">
                      <rect x="10" y="10" width="30" height="30" stroke="black" fill={item.color} strokeWidth="1"></rect>
                  </svg>
                  )}
                </>
              </div><b>Brand</b>
              <div className="brand-span-filter">
              {brandsData && brandsData.values && brandsData.values.map((item, index) =>
              <div key={index}>
                  <input type="checkbox" onChange={() => this.getFilteredData(item.value, "brand")}></input>
                  <span>{item.value}</span>
              </div>
              )}
              </div>
              <b>Price</b>
              {pricesData && pricesData.values && pricesData.values.length > 0 &&
              <div className="price-container">
                <select>
                  {pricesData.values.map(item => <option key={item.key} value={item.displayValue}>{item.displayValue}</option>)}
                </select>
                <select>
                  {pricesData.values.map(item => <option key={item.key} value={item.displayValue}>{item.displayValue}</option>)}
                </select>
              </div>}
            </aside>
        );
    }
}

export default ProductFilter;