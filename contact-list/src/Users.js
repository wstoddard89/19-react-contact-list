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
          <Link to={`/`}>
            <div id="arrow">
              <i class="fas fa-long-arrow-alt-left fa-2x"></i>
            </div>
          </Link>
            <img className="thumbNails" src={currentUser.picture.large}></img>
          </div>

          <div className="userInfo">
            <h5><i class="fas fa-user-check"></i> 
            {currentUser.name.first.charAt(0).toUpperCase() + currentUser.name.first.slice(1)} {currentUser.name.last.charAt(0).toUpperCase() + currentUser.name.last.slice(1)}</h5>
          
            <h5><i class="far fa-envelope"></i> 
            {currentUser.email}</h5>
          
            <h5><i class="fas fa-mobile"></i> 
            {currentUser.cell}</h5>
            <h5>
            <i class="fas fa-globe-americas"></i> 
            {currentUser.location.city}, 
              {currentUser.location.state}
            </h5>
          </div>
        </div>
    </div>)
}



export default Users