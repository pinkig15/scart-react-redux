import React, { Component } from 'react';

class Cart extends Component {

    constructor(props) {
        super(props)
        this.setState = {
            newArr:this.props.newArr
        }
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        // this.setState({newArr: nextProps.newArr})
        
        }

    render() {
        var newArr = this.props.newArr;
        return (
            <div className="no-result">Cart is Empty!</div>
              
            
        );
    }
}

export default Cart;