import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/LogIn';
import FriendsList from './components/FriendsList';
import PrivateRoute from "./components/PrivateRoute.js";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/friendsList">Friends List</Link></li>
        </nav>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friendsList" component={FriendsList} />
          <Route exact path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
