import { Link ,NavLink } from "react-router-dom";
import "../css/main.css";
import React from "react";
import CurrentDate from '../components/CurrentDate';
import { FaBars, FaTimes } from "react-icons/fa"
    /* import "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"; */
function Navbar() {
    return (
        <nav>
           <NavLink to="/"><div id="logo"/></NavLink>
            <ul>
            <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/Profil">Profil</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
               
               
                
            </ul>
             <CurrentDate />
        </nav> 

      
    );
}

export default Navbar;