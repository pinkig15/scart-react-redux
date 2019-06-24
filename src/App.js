import React, { Component } from "react";
import { Router, Route, Redirect,Switch } from "react-router-dom";
import Login from './components/Login';
import Home from "./components/Home";
import Cart from "./components/Cart";
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.css';
 
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

  render() {

    const { data, isAuthenticated} = this.state;

    const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
      <Route { ...rest } render={props => (
        localStorage.getItem("isAuthenticated") === "true" ? (
          <Component { ...props } />
        ) : (
          <Redirect to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      )} />
    )

    return (
      <Router history={history}>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Login}/> 
          <PrivateRoute path="/scart" component={Cart}  />
          <PrivateRoute path="/store" component={Home} />
        </Switch>
      </div>
      </Router>
    );
  }
  
}

export default App;