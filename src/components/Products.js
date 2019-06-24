import React, { Component } from 'react';
import { ResetIcon } from '../constants';

class Products extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            newArr: [],
            selectedColor: [],
            selectedBrand: [],
            searchInp: this.props.searchInp
        }
    }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
      this.setState({data: nextProps.data, newArr: nextProps.data, searchInp: nextProps.searchInp})
      
    }

  

    searchHandler = e => {
      this.setState({ searchInp: e.target.value }, () => {
        this.props.search(this.props.searhInp);
      });
    };
  
    showItem = title => {
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

    resetFilter = () => {
      this.setState({newArr: this.state.data})
    }
    
    filterData = (value, type) => {
      var newArr1, newArr2;
      if(type === "color") {
        newArr1 = this.state.data.filter(item => item.colour.color === value)
        this.setState({newArr: newArr1})
      }
      else if(type === "brand"){
        newArr2 = this.state.data.filter(item => item.brand === value)
        this.setState({newArr: newArr2})
      }
    }
  
    componentDidMount() {
        this.setState({newArr: this.state.data})
    }
    

    render() {
        const colors = ["#00AF33", "#33A1DE", "#FFD700", "#292421", "#B87333", "#5C3317", "#8C7853", "#800000", "#900020", "#F0E68C", "#787878", "#F5F5DC"];
        const brands = ["peter england pe", "znopy", "gowell", "twin", "holysin", "foxzy", "finery", "scarpia", "adreno", "black macy", "marathon", "trv", "fine arch", "kaption", "north star", "blue tag", "mbh", "elano", "globia", "rohyt", "opner", "bond street", "wave walk", "fly india", "zekonis", "action campus", "toms", "united colors of benetton", "columbus", "axter", "baaz", "devoir", "fuzone amco", "cougar", "roony", "montiano", "kwellin", "camro", "dream like", "lockey"]
       const {newArr} = this.state;
        return (
            <div className="main-container">
            <aside className="filter">
              <div className="filter-title">
                  <span>Filter</span> <span onClick={()=> this.resetFilter()}>
                    <ResetIcon />
                  </span>
              </div>
              <b>Color</b>
              <div className="color-span-filter">
                  <>
                  {colors.map((item, index) =>
                  <svg onClick={()=> this.filterData(item, "color")} key={index} width="30" height="30">
                      <rect x="10" y="10" width="30" height="30" stroke="black" fill={item} strokeWidth="1"></rect>
                  </svg>
                  )}
                  </>
              </div><b>Brand</b>
              <div className="brand-span-filter">
              {brands.map((item, index) =>
              <div key={index}>
                  <input type="checkbox" onChange={() => this.filterData(item, "brand")}></input>
                  <span>{item}</span>
              </div>
              )}
              </div>
            </aside>
            {newArr && newArr.length > 0 ? 
                <main className="product-container">{newArr.map(
                item =>
                this.showItem(item.title) && <div key={item.id}>
                        <img alt={"test_img"} src={item.image} />
                        <div className="product-detail">
                            <b> {item.title}</b>
                            <div className="after-img-div">
                            <div className="color-span">
                                color
                                <svg width="20" height="20">
                                    <rect x="10" y="10" width="10" height="20" stroke="black" fill={item.colour.color} strokeWidth="1"/>
                                </svg>
                            </div>
                        </div>
                        <div className="add-div">{`Brand: ${item.brand}`} <span className="plus">+</span></div>
                        <span>{`Rating: ${item.rating}`}</span>
                        <span> {`Price: $${parseInt(item.price.final_price  / 69.52)}`}</span>
                        <span> {`Discount: ${item.discount}`}</span>
                        </div>
                    </div>
                )}</main> : 
                <div className="no-result">No Result Found!</div>
            }
            </div>
        );
    }
}

export default Products;