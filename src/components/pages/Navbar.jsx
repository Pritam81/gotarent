import React from 'react';
import { Link } from "react-router-dom";
import './nav.css'
const logo = require("../imges/logo.png")
const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <div className='left-nav'>
                <div className="myImg">
                 <li>
                    <img src= {logo} alt="img here" className='logo'></img>    
                 </li>
                </div>
                <div className="list-item">
                  <li>
                    <a to = "/RentalRooms">Rental Rooms</a>
                  </li>
                  <li>
                    <a to = "/Pg">Paying Guest</a>
                  </li>
                  <li>
                    <a to = "Hostels">Hostels</a>
                  </li>

                </div>
             
            </div>
            <div className="right-nav">
              <li>
                <a to = "/login">Log-In</a>
              </li>
              <li>
                <a to = "/Signup">Sign-Up</a>
              </li>
              <div className="search">
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
               <input type="text" placeholder='Search Your Rental' className='myInput'/>
              </div>
            </div>
        </ul>
      
    </div>
  )
}

export default Navbar
