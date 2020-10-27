import About from './About';
import React, { Fragment, useState } from 'react';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import axios from 'axios';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import githubState from './context/github/GithubState';
import './App.css';
import GithubState from './context/github/GithubState';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <GithubState>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route
                path="/user/:login"
                render={(props) => <User {...props} />}
              />
            </Switch>
          </div>
        </div>
      </GithubState>
    </Router>
  );
};

export default App;
