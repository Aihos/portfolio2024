import { Link ,NavLink } from "react-router-dom";
import "../css/main.css";
import React from "react";
import CurrentDate from '../components/CurrentDate';
import { FaBars, FaTimes } from "react-icons/fa"
    /* import "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"; */
function Navbar() {
    return (
        <nav>
           <NavLink to="/"><div id="logo"/><img src="./image/whitelogoportfolio.png" alt="" /></NavLink>
            <ul>
            
            <li><NavLink to="/"> <img src="./image/homesvgwhite.png" alt="" /></NavLink></li>
                <li><NavLink to="/Portfolio"><img src="./image/portfoliowhitesvg.png" alt="" /></NavLink></li>
                <li><NavLink to="/Profil"><img src="./image/profilwhitesvt.png" alt="" /></NavLink></li>
                <li><NavLink to="/Contact"><img src="./image/contactwhitesvg.png" alt="" /></NavLink></li>
               
               
                
            </ul>
            <img src="./image/menuwhitesvt.png" alt="" />
        </nav> 
        

      
    );
}

export default Navbar;