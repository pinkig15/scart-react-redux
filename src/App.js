import React, { Component } from "react";
import { Router, Route, Redirect,Switch } from "react-router-dom";
import Login from './components/Login';
import Home from "./components/Home";
import Cart from "./components/Cart";
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.css';
import PageNotFound from "./components/PageNotFound.js";
 
const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInp: "",
      data: null,
      error: "",
      username: ""
    };
  }

  updateAuth = () => {
    this.props.history.push("/")
  }

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
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
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </div>
      </Router>
    );
  }
  
}

export default App;