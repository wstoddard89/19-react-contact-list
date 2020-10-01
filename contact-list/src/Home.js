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



function Home() {
  const [users, setUsers] = useState(usersJSON)
  return(
  <div className="listContainer">
        <h2 className="myPeeps">My Peeps</h2>
          <ul className="userList">
          {users.map((item) => (
            <Link to={`/userInfo/${item.id}`} key={item.id}>
            <li key={item.id}>
              <img src={item.picture.thumbnail}></img>
              {item.name.first.charAt(0).toUpperCase() + item.name.first.slice(1)} {item.name.last.charAt(0).toUpperCase() + item.name.last.slice(1)}</li>
              </Link>
          ))}
        </ul>
      </div>
      )
}



export default Home