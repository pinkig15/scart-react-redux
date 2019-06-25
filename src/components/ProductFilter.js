import React, { Component } from 'react';
import { ResetIcon } from '../constants';

class ProductFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: {},
          filterData: [],
          filteredData: [],
          colorsData: {},
          brandsData: {},
          pricesData: {}
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({filterData: nextProps.filterData}, ()=> {
          const {filterData} = this.state;
          this.setState({
            colorsData: this.getFilterSubData(filterData, "COLOUR"),
            brandsData: this.getFilterSubData(filterData, "BRAND"), 
            pricesData: this.getFilterSubData(filterData, "PRICE")
          })
        })
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
          this.setState({filteredData: newArr1})
        }
        else if(type === "brand"){
          newArr2 = this.state.data.filter(item => item.brand === value)
          this.setState({filteredData: newArr2})
        }
      }
    
    render() {
        // const colors = ["#00AF33", "#33A1DE", "#FFD700", "#292421", "#B87333", "#5C3317", "#8C7853", "#800000", "#900020", "#F0E68C", "#787878", "#F5F5DC"];
        // const brands = ["peter england pe", "znopy", "gowell", "twin", "holysin", "foxzy", "finery", "scarpia", "adreno", "black macy", "marathon", "trv", "fine arch", "kaption", "north star", "blue tag", "mbh", "elano", "globia", "rohyt", "opner", "bond street", "wave walk", "fly india", "zekonis", "action campus", "toms", "united colors of benetton", "columbus", "axter", "baaz", "devoir", "fuzone amco", "cougar", "roony", "montiano", "kwellin", "camro", "dream like", "lockey"]
       const {colorsData, brandsData} = this.state;
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
                  <svg onClick={()=> this.filterData(item, "color")} key={index} width="30" height="30">
                      <rect x="10" y="10" width="30" height="30" stroke="black" fill={item.color} strokeWidth="1"></rect>
                  </svg>
                  )}
                  </>
              </div><b>Brand</b>
              <div className="brand-span-filter">
              {brandsData && brandsData.values && brandsData.values.map((item, index) =>
              <div key={index}>
                  <input type="checkbox" onChange={() => this.getFilteredData(item, "brand")}></input>
                  <span>{item.value}</span>
              </div>
              )}
              </div>
            </aside>
        );
    }
}

export default ProductFilter;