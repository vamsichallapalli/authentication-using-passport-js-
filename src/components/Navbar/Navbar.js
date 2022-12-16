import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = ({user}) => {
  const onLogout = () =>{
    window.open("http://localhost:5000/auth/logout","_self")
  }
  return (
    <div className='navbar-conatiner'>
        <span className='logo'>Vamsi App</span>
        {user?( <ul className='list'>
            <li className='listItem'>
                <img className = "name-icon" src={user.photos[0].value}alt=''></img>
            </li>
            <li className='listItem'>
                {user.displayName}
            </li>
            <li className='listItem logout' onClick={onLogout}>
                 Logout
            </li>

        </ul>):
        <Link to = '/login' className='link'>Login</Link>}
       
    </div>
  )
}

export default Navbar