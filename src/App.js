import React, { Component } from "react";
import { FETCH_PRODUCTS, SEARCH_PRODUCT, LOGIN } from "./constants";
import { connect } from "react-redux";
import { Router, Route, Redirect,Switch } from "react-router-dom";
import Login from './components/Login';
import Home from "./components/Home";
import Cart from "./components/Cart";
import { createBrowserHistory } from 'history';
 
const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInp: "",
      data: null,
      error: "",
      username: "",
      isAuthenticated: false
    };
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if(nextProps.data && nextProps.data && nextProps.data.data && nextProps.data.data[0]) {
      this.setState({isAuthenticated: true, username: nextProps.data.data.username}, () => {
        // history.push("/store")
      })
    }
  }



  logout = () => {
    this.setState({isAuthenticated: false}, () => {
      history.push("/")
    })
  }

  componentDidMount = () => {
    if(this.state.isAuthenticated) {
      history.push("/store")
    }
  }

  render() {

    const { data, isAuthenticated} = this.state;

    const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect
            to={"/"}
          />
          )
        }
      />
    )

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={props => <Login login={this.props.login} {...props}/>} />
          <PrivateRoute path="/scart" component={Cart} isAuthenticated={isAuthenticated}/>} />
          <PrivateRoute path="/store" component={Home} isAuthenticated={isAuthenticated} fetchProducts={this.props.fetchProducts}/>
        </Switch>
      </Router>
    );
  }
  
}

App.defaultProps = {
  searchInp: ""
};

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    data: state.data,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch({type: `${LOGIN}_PENDING`, data: data}),
    fetchProducts: () => dispatch({ type: `${FETCH_PRODUCTS}_PENDING` }),
    search: data => dispatch({ type: `${SEARCH_PRODUCT}_PENDING`, data: data })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
