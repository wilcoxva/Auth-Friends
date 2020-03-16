import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/LogIn';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <li><Link to="/login">Log In</Link></li>
          </nav>
        </header>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
