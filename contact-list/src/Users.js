import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  useParams
} from "react-router-dom";
import usersJSON from './users.json'


function Users() {
  const [users, setUsers] = useState(usersJSON)
  const { id } = useParams()
  const currentUser = users.find((item) => item.id == id)
  return(
    <div className="eachUser">
      
        <div className="eachUserDiv">
          <div className="userImage">
            <img className="thumbNails" src={currentUser.picture.large}></img>
          </div>

          <div className="userInfo">
            <h5>{currentUser.name.first} {currentUser.name.last}</h5>
          
            <h5>{currentUser.email}</h5>
          
            <h5>{currentUser.cell}</h5>
            <h5>
              {currentUser.location.city}
              {currentUser.location.state}
            </h5>
          </div>
        </div>
    </div>)
}



export default Users