import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import usersJSON from './users.json'
import Home from './Home.js'
import Users from './Users.js'


function App() {

  // const [users, setUsers] = useState(usersJSON)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/userInfo/:id">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
